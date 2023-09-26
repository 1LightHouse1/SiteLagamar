class MobileNavBar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ?(link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

mobileNavBar.init();

const elem = document.querySelector('#nav-bg'),
      toggleBtn = document.querySelector('#toggle-btn'),
      elemH = elem.getBoundingClientRect().height,
      elemW = elem.getBoundingClientRect().width;

let open = false;
let scale, offsetX, offsetY;

const calculateValues = (() => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  //const cssStyles = getComputedStyle(elem);
  //const offsetValue = Number(cssStyles.getPropertyValue('--offset-value'));
  const offsetValue = Number(getComputedStyle(elem).getPropertyValue('--offset-value'));

  //  Offsets to center the circle
  offsetX = (w/2) - (elemW/2) - offsetValue;
  offsetY = (h/2) - (elemH/2) - offsetValue;

  // Good old pythagoras
  const radius = Math.sqrt((h ** 2)+(w ** 2));
  scale = radius/(elemW/2)/2 + .1; // Add '.1' to compensate for Safari sub pixel blur issue
  return scale;
})


const openMenu = () => {
  elem.style.setProperty("--translate-x", `${offsetX}px`);
  elem.style.setProperty("--translate-y", `-${offsetY}px`);
  elem.style.setProperty("--scale", scale);
}
const closeMenu = () => {
  elem.style.setProperty("--scale", 1);
  elem.style.setProperty("--translate-x", 0);
  elem.style.setProperty("--translate-y", 0);
}
const animateMenu = () => {
  open ? openMenu() : closeMenu();
};

const toggleMenu = () => {
  open = !open;
  animateMenu();
  toggleBtn.classList.toggle('shown');
}

const resizeHandler = () => { 
  window.requestAnimationFrame(() => {
    calculateValues();
    animateMenu();
  });
}

calculateValues();

//toggleBtn.onclick = toggleMenu;
toggleBtn.addEventListener('click', toggleMenu, false);
window.addEventListener("resize", resizeHandler, false);