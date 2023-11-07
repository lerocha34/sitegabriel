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
      clique.innerHTML = "Leia Mais";}

  
  })
})

