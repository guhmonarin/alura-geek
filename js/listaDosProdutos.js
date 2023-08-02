import { getBuscarProdutos, getBuscarProdutosPorId } from "./api"

async function exibirProdutos() {
    let listaDeProdutos = getBuscarProdutos()
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
    let produto = getBuscarProdutosPorId(produtoId);
    imagem.innerHTML = `
    <img src = "${produto.img}">
    `
    descricao.innerHTML = `
    <h2>${produto.nome}</h2>
    <p class = "detalhes__descricao__preco">R$ ${produto.preco.toFixed(2)}</p>
    <p class = "detalhes__descricao__descricao">${produto.descricao}</p>
    `
}

module.exports = {
    exibirProdutos,
    exibirProdutosPorId
};