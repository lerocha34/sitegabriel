let lerMais = document.querySelector(".article-area .article-texts #article1");
let maisConteudo = 0;
lerMais.addEventListener('click',()=>{
    document.querySelector(".article-area .article-texts .article-text").style.height = "fit-content";
    console.log('funcionou')
    if (maisConteudo === 0){
        lerMais.innerHTML = "Ler Menos"
        maisConteudo = 1;
    }
})
