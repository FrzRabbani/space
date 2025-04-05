function changeTabPanel(e) {
    const targetTab = e.target.closest('[role="tab"]');
    if (!targetTab) return;
  
    const targetPanel = targetTab.getAttribute("aria-controls");
    const targetImage = targetTab.getAttribute("data-image");
  
    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;
  
    tabContainer.querySelector('[aria-selected="true"]')?.setAttribute("aria-selected", false);
    targetTab.setAttribute("aria-selected", true);
  
    hideContent(mainContainer, '[role="tabpanel"]');
    showContent(mainContainer, `#${targetPanel}`);
  
    hideContent(mainContainer, 'picture');
    showContent(mainContainer, `#${targetImage}`);
  }
  
  function hideContent(parent, selector) {
    parent.querySelectorAll(selector).forEach(item => {
      item.setAttribute("hidden", true);
    });
  }
  
  function showContent(parent, selector) {
    parent.querySelector(selector)?.removeAttribute("hidden");
  }
  
  function setupTabListeners(sectionSelector) {
    const tabList = document.querySelector(`${sectionSelector} [role="tablist"]`);
    if (!tabList) return;
  
    const tabs = tabList.querySelectorAll('[role="tab"]');
  
    tabList.addEventListener('keydown', (e) => changeTabFocus(e, tabs));
  
    tabs.forEach((tab) => {
      tab.addEventListener('click', changeTabPanel);
    });
  }
  
  function changeTabFocus(e, tabs) {
    const LEFT = 37;
    const RIGHT = 39;
    let tabFocus = Array.from(tabs).findIndex(tab => tab === document.activeElement);
  
    if (e.keyCode === LEFT || e.keyCode === RIGHT) {
      tabs[tabFocus].setAttribute("tabindex", -1);
  
      if (e.keyCode === RIGHT) {
        tabFocus = (tabFocus + 1) % tabs.length;
      } else if (e.keyCode === LEFT) {
        tabFocus = (tabFocus - 1 + tabs.length) % tabs.length;
      }
  
      tabs[tabFocus].setAttribute("tabindex", 0);
      tabs[tabFocus].focus();
    }
  }
  
  // Init
  function goToDestinationPage(){
    const allSec = document.querySelectorAll('.section');
    allSec.forEach((sec) => {
      sec.style.display = 'none';
    });
   const destinationSec = document.getElementById('destinations');
   destinationSec.style.display = 'block';
   document.body.className = 'destinations';
  }
  
  setupTabListeners('#destinations');
  setupTabListeners('#crews');
  setupTabListeners('#technologies');
  
  const exploreBtnEl = document.querySelector('.link--round');
  exploreBtnEl.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('nav-destination').click();
    goToDestinationPage();

  });