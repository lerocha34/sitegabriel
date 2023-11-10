let menuBotao = document.querySelector('.menu-mobile-button');
let closeMenu = document.querySelector('.close-menu');



menuBotao.addEventListener("click", ()=>{
    document.querySelector(".menu-mobile").style.display = 'flex';  
    document.querySelector("body").style.overflowY = 'hidden';  
    menuBotao.style.display = 'none';
})


closeMenu.addEventListener("click",()=>{
    document.querySelector(".menu-mobile").style.display = 'none';
    document.querySelector("body").style.overflowY = 'visible';
    menuBotao.style.display = 'flex';

})

document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");
  const items = document.querySelectorAll(".item");
  const interval = 3000; // 3 segundos

  let currentIndex = 0;

  function nextSlide() {
      currentIndex = (currentIndex + 1) % items.length;
      updateGallery();
  }

  function updateGallery() {
      gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  setInterval(nextSlide, interval);
});
