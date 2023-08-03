window.addEventListener('resize', () => {
    const tamanhoDaTela = window.innerWidth;
    tamanhoDaTela < 1440 ? exibirQuatroProdutos() : exibirSeisProdutos;

})