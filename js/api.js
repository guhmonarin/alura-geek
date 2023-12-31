async function getBuscarProdutos() {
    let listaDeProdutos = []
    const res = await fetch('https://my-json-server.typicode.com/guhmonarin/demo-api/produtos')
    listaDeProdutos = await res.json()
    return listaDeProdutos
}

async function getBuscarProdutosPorId(produtoId) {
    const res = await fetch(`https://my-json-server.typicode.com/guhmonarin/demo-api/produtos/${produtoId}`)
    let produto = await res.json()
    return produto  
}

async function ultimoId() {
    listaDeProdutos = await getBuscarProdutos();
    let ultimoId = 0;
    for (let produto of listaDeProdutos) {
        if (produto.id > ultimoId) {
            ultimoId = produto.id;
        }
    }
    return ultimoId;
}