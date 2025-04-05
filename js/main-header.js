class MainHeader extends HTMLElement {
    connectedCallback() {
       this.innerHTML = `
        <header>
            <nav class="nav">
                <a href="space.html">
                     <svg class="icon icon--large nav__logo">
                        <use xlink:href="./images/svgspace.svg#logo"></use>
                    </svg>
                </a>
                <svg class="icon icon--large nav__logo">
            <use xlink:href="images/svgspace.svg#logo"></use>
         </svg>
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
                    <li id= "nav-destination" class="list__item nav__item">
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
            <svg class="icon icon--large nav__logo">
            <use xlink:href="images/svgspace.svg#logo"></use>
         </svg>
        </header>
        `  
    }
 }
 customElements.define('main-header', MainHeader);