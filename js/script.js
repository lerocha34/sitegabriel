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
}

