let openMenu = document.querySelector(".banner .banner-image .menu-buttons");
let xButton = document.querySelector(".menu .menu-opened .close-menu");
let menu = document.querySelector(".menu");


function menuOpened(){
  menu.style.display = 'flex';
  mouse = 1;
}
function closeMenu(){
  menu.style.display = "none";

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

