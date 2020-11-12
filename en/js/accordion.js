const allPanels = Array.from(document.querySelectorAll(".panel"));
const allAccordion = Array.from(document.querySelectorAll(".accordion"));
const allBars = Array.from(document.querySelectorAll("div[skill-rate]"));

function resetAll() {
  allAccordion.forEach(acc => {
    acc.classList.remove("active");
  });
  
  allPanels.forEach(function(elem) {
    elem.style.maxHeight = null;
  });

  allBars.forEach(function(bar) {
    bar.style.width = 0;
  });
}

allAccordion.forEach(item => {
  item.addEventListener("click", function (e) {
    

    if(!this.nextElementSibling.classList.contains("active")) {
      resetAll();
      
      this.nextElementSibling.classList.add("active");
  
      let activePanel = this.nextElementSibling;
      activePanel.style.maxHeight = activePanel.scrollHeight + "px";
  
      let skillBars = activePanel.querySelectorAll("div[skill-rate]");
      skillBars.forEach(bar => {
        bar.style.width = bar.getAttribute('skill-rate');
      });
    } else {
      resetAll();
    }
  })
});