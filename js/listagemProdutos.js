const elementoParaInserirProdutos = document.getElementById('produtos')

function exibirProdutos(listaDeProduto) {
    elementoParaInserirProdutos.innerHTML = []
    listaDeProduto.forEach(produtos => {
        elementoParaInserirProdutos.innerHTML += `<div class="produtos__catalogo_produtos">
        <img src="${produtos.url}">
        <h3>${produtos.nome}</h3>
        <p>R$ ${produtos.preco.toFixed(2)}</p>
        <a href="descricao.html" class = "botao" id = "${produtos.id}">Ver produto</a>
    </div>`
    })
}



