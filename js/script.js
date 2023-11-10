let openMenu = document.querySelector(".banner .banner-image .menu-buttons");
let xButton = document.querySelector(".menu .menu-opened .close-menu");
let menu = document.querySelector(".menu");
let menuMobile = document.querySelector('.menu-buttons-mobile');

function menuOpened(){
  menu.style.display = 'flex';
  menuMobile.style.display ='none';
  mouse = 1;
}
function closeMenu(){
  menu.style.display = "none";
  menuMobile.style.display ='flex';
}

function mouseVerify(event){
  var relatedElement = event.relatedTarget;
  if(!menu.contains(relatedElement)){
    closeMenu()
  }
}


menu.addEventListener('mouseout', mouseVerify);
openMenu.addEventListener('click',menuOpened);
xButton.addEventListener('click',closeMenu);
menuMobile.addEventListener('click',menuOpened);

