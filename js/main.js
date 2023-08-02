const url = 'http://localhost:3000/produtos';

let produtos = []

async function getBuscarProdutos() {
    const res = await fetch(url)
    listaDeProdutos = await res.json()
    exibirProdutos(listaDeProdutos)

    const botoes = document.querySelectorAll('.botao')
    botoes.forEach(btn => btn.addEventListener('click', abrirProduto))
}

getBuscarProdutos()
