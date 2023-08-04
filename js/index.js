window.addEventListener('resize', () => {
    
    const tamanhoDaTela = window.innerWidth;
    console.log(tamanhoDaTela)
    tamanhoDaTela < 1440 ? exibirQuatroProdutos() : exibirSeisProdutos();
    
})