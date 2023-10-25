let lerMais = document.querySelectorAll(".article-area .article-texts .article-read");
let maisConteudo = 0





lerMais.forEach(function(clique, index){
  clique.addEventListener("click", ()=>{
    let texto = document.querySelectorAll(".article-text")[index];
    if(maisConteudo === 0){
      maisConteudo = 1;
      texto.style.height = "auto";
      clique.innerHTML = "Ler Menos";
    } else {
      maisConteudo = 0;
      texto.style.height = "57px";
      clique.innerHTML = "Ler Mais";}

  
  })
})



















/*
let lerMais = document.querySelector(".article-area .article-texts #article1");
let maisConteudo = 0;
let texto = document.querySelector(".article-area .article-texts .article-text");
lerMais.addEventListener('click',abrir)

function abrir(){
  if(maisConteudo === 0){
    maisConteudo = 1;
    texto.style.height = "auto";
    lerMais.innerHTML = "Ler Manos";
  } else {
    maisConteudo = 0;
    texto.style.height = "57px";
    lerMais.innerHTML = "Ler Mais";
  }
}*/