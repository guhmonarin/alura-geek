async function exibirProdutos() {
    let listaDeProdutos = await getBuscarProdutos()
    const elementoParaInserirProdutos = document.getElementById('produtos')
    elementoParaInserirProdutos.innerHTML = []
    listaDeProdutos.forEach(produtos => {
        elementoParaInserirProdutos.innerHTML += `<div class="produtos__catalogo_produtos">
        <img src="${produtos.url}">
        <h3>${produtos.nome}</h3>
        <p>R$ ${produtos.preco.toFixed(2)}</p>
        <a href="descricao.html?id=${produtos.id}">Ver produto</a>
    </div>`
    })
}

async function exibirProdutosPorId() {
    const imagem = document.querySelector('.detalhes__foto')
    const descricao = document.querySelector('.detalhes__descricao')
    const urlParams = new URLSearchParams(window.location.search);
    const produtoId = urlParams.get('id');
    let produto = []
    produto = await getBuscarProdutosPorId(produtoId);
    console.log(produto)
    imagem.innerHTML = `
    <img src = "${produto.url}">
    `
    descricao.innerHTML = `
    <h2>${produto.nome}</h2>
    <p class = "detalhes__descricao__preco">R$ ${produto.preco}</p>
    <p class = "detalhes__descricao__descricao">${produto.descricao}</p>
    `
}

async function exibirQuatroProdutos() {
    let listaDeProdutos = await getBuscarProdutos()
    const starsWars = document.getElementById('star-wars')
    const consoles = document.getElementById('consoles')
    const diversos = document.getElementById('diversos')
    starsWars.innerHTML = []
    consoles.innerHTML = []
    diversos.innerHTML = []
    let categoriaStarWars = 0
    let categoriaConsoles = 0
    let categoriaDiversos = 0
    listaDeProdutos.forEach(produto => {
        if (produto.categoria == "Star wars" && categoriaStarWars < 4) {
            categoriaStarWars += 1
            starsWars.innerHTML += `
            <div class="produtos__catalogo_produtos">
                <img src=${produto.url}>
                <h3>${produto.nome}</h3>
                <p>R$ ${produto.preco.toFixed(2)}</p>
                <a href="descricao.html?id=${produto.id}">Ver produto</a>
            </div>
            `
        } else if (produto.categoria == "Consoles" && categoriaConsoles < 4) {
            categoriaConsoles += 1
            consoles.innerHTML += `
            <div class="produtos__catalogo_produtos">
                <img src=${produto.url}>
                <h3>${produto.nome}</h3>
                <p>R$ ${produto.preco.toFixed(2)}</p>
                <a href="descricao.html?id=${produto.id}">Ver produto</a>
            </div>
            `
        } else if (produto.categoria !== "Star wars" && produto.categoria !== "Consoles" && categoriaDiversos < 4){
            categoriaDiversos += 1
            diversos.innerHTML += `
            <div class="produtos__catalogo_produtos">
                <img src=${produto.url}>
                <h3>${produto.nome}</h3>
                <p>R$ ${produto.preco.toFixed(2)}</p>
                <a href="descricao.html?id=${produto.id}">Ver produto</a>
            </div>
            `
        }
    })
}

async function exibirSeisProdutos() {
    let listaDeProdutos = await getBuscarProdutos()
    const starsWars = document.getElementById('star-wars')
    const consoles = document.getElementById('consoles')
    const diversos = document.getElementById('diversos')
    starsWars.innerHTML = []
    consoles.innerHTML = []
    diversos.innerHTML = []
    let categoriaStarWars = 0
    let categoriaConsoles = 0
    let categoriaDiversos = 0
    listaDeProdutos.forEach(produto => {
        if (produto.categoria == "Star wars" && categoriaStarWars < 6) {
            categoriaStarWars += 1
            starsWars.innerHTML += `
            <div class="produtos__catalogo_produtos">
                <img src=${produto.url}>
                <h3>${produto.nome}</h3>
                <p>R$ ${produto.preco.toFixed(2)}</p>
                <a href="descricao.html?id=${produto.id}">Ver produto</a>
            </div>
            `
        } else if (produto.categoria == "Consoles" && categoriaConsoles < 6) {
            categoriaConsoles += 1
            consoles.innerHTML += `
            <div class="produtos__catalogo_produtos">
                <img src=${produto.url}>
                <h3>${produto.nome}</h3>
                <p>R$ ${produto.preco.toFixed(2)}</p>
                <a href="descricao.html?id=${produto.id}">Ver produto</a>
            </div>
            `
        } else if (produto.categoria !== "Star wars" && produto.categoria !== "Consoles" && categoriaDiversos < 6){
            categoriaDiversos += 1
            diversos.innerHTML += `
            <div class="produtos__catalogo_produtos">
                <img src=${produto.url}>
                <h3>${produto.nome}</h3>
                <p>R$ ${produto.preco.toFixed(2)}</p>
                <a href="descricao.html?id=${produto.id}">Ver produto</a>
            </div>
            `
        }
    })
}