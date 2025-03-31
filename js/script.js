class MainHeader extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `
       <header>
           <nav class="nav">
               <a href="Space.html">
                   <svg class="icon icon--large nav__logo">
                   <use xlink:href="images/theSprite.svg#logo"></use>
               </svg>
               </a>
               <button aria-controls="primary-navigation" aria-expanded="false" class="btn nav__toggler">
                   <span class="sr-only">munu</span>
               </button>
               <ul id="primary-navigation" data-visible="false" class="list primary-navigation">
                   <li class="list__item nav__item">
                       <a class="nav__link hoverState" href="#" onclick="return show('home')">
                       <span aria-hidden="true" class="list__number">00</span>
                       home
                       </a>
                   </li>
                   <li class="list__item nav__item">
                       <a class="nav__link" href="#" onclick="return show('destinations')">
                       <span aria-hidden="true" class="list__number">01</span>
                       destination
                       </a>
                   </li>
                   <li class="list__item nav__item">
                       <a class="nav__link" href="#" onclick="return show('crews')">
                       <span aria-hidden="true" class="list__number">02</span>
                       crew
                       </a>
                   </li>
                   <li class="list__item nav__item">
                       <a class="nav__link" href="#" onclick="return show('technologies')">
                       <span aria-hidden="true" class="list__number">03</span>
                       technology
                       </a>
                   </li>
               </ul>
           </nav>
       </header>
       `  
   }
}
customElements.define('main-header', MainHeader);

// nav bar

const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".nav__toggler");
console.log(navToggle);


navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === 'false'){
     primaryNav.setAttribute('data-visible', true);
     navToggle.setAttribute('aria-expanded', true)
  }
  else{
     primaryNav.setAttribute('data-visible', false);
     navToggle.setAttribute('aria-expanded', false);

  }
  
});


const linkElList = document.querySelectorAll('.pagination__item');
console.log(linkElList);
 
linkElList.forEach(linkEl => {
   linkEl.addEventListener('click', () => {
      document.querySelector('.special')?.classList.remove('special');
      linkEl.classList.add('special');
   });
});

const btnElList = document.querySelectorAll('.list__item');
console.log(btnElList);

btnElList.forEach(linkEl => {
   linkEl.addEventListener('click', () => {
      document.querySelector('.active')?.classList.remove('active');
      linkEl.classList.add('active');
   });
});


// show sections

function show(elementId){
   const ele = document.getElementById(elementId);

   const pages = document.getElementsByClassName('section');
   for (let i = 0; i < pages.length; i++){
      pages[i].style.display = 'none';
   }
   ele.style.display = 'block';
   document.body.className = elementId;
}



// navigate contents and images

function changeTabPanel(e) {
   e.preventDefault();
    const targetTab = e.target;
   if (targetTab.tagName === 'A'){
      targetTab = targetTab.parentElement;
   }

    const targetPanel = targetTab.getAttribute("aria-controls");
    const targetImage = targetTab.getAttribute("data-image");
    
    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;
     

    tabContainer
    .querySelector('[aria-selected="true"]')
        .setAttribute("aria-selected", false);
        
        targetTab.setAttribute("aria-selected", true);
    
    hideContent(mainContainer, '[role="tabpanel"]');
    showContent(mainContainer, [`#${targetPanel}`]);
    
    hideContent(mainContainer, 'picture');
    showContent(mainContainer, [`#${targetImage}`]);
   }
   

   function hideContent(parent, content) {
    parent
        .querySelectorAll(content)
        .forEach((item) => item.setAttribute("hidden", true));
}

function showContent(parent, content) {
     parent.querySelector(content).removeAttribute('hidden');
   }
    
   
   // tabs
   function setupTabListeners(sectionSelector) {
      const tabList = document.querySelector(`${sectionSelector} [role="tablist"]`);
  
      if (tabList) {
          const tabs = tabList.querySelectorAll('[role="tab"]');
  
          tabList.addEventListener('keydown', changeTabFocus);
  
          tabs.forEach((tab) => {
              tab.addEventListener('click', changeTabPanel);
          });
      }
  }
  
  setupTabListeners('#destinations');
  setupTabListeners('#crews');
  setupTabListeners('#technologies');
   
   let tabFocus = 0;
   function changeTabFocus(e) {
       const keydownLeft = 37;
       const keydownRight = 39;
       
       if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
           tabs[tabFocus].setAttribute("tabindex", -1);
           
           if (e.keyCode === keydownRight) {
               tabFocus++;
               if (tabFocus >= tabs.length) {
                   tabFocus = 0;
               }
           } else if (e.keyCode === keydownLeft) {
               tabFocus--;
               if (tabFocus < 0) {
                   tabFocus = tabs.length - 1;
               }
           }
           
           tabs[tabFocus].setAttribute("tabindex", 0);
           tabs[tabFocus].focus();
       }
   }