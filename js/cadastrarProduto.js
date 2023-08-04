const file = document.getElementById('url')
const categoria = document.getElementById('categoria')
const nome = document.getElementById('nome')
const preco = document.getElementById('preco')
const descricao = document.getElementById('descricao')
const adicionar = document.getElementById('adicionar')
let caminhoDaImagem = ''


file.addEventListener("change", function() {

    if (file.files && file.files[0]) {
      const url = URL.createObjectURL(file.files[0]);
      caminhoDaImagem = url;
    }
  });
    

adicionar.addEventListener('click', cadastrar)

function cadastrar(e){
    e.preventDefault();
    if (caminhoDaImagem === '') {
        alert("Por favor, seleciona uma imagem")
    } else if (categoria.value === ''){
        alert("Por favor, seleciona uma categoria")
    } else if (nome.value === ''){
        alert("Por favor, digite o nome do produto")
    } else if (preco.value === ''){
        alert("Por favor, digite o preco do produto")
    } else if (descricao.value === '') {
        alert("Por favor, digite a descricao do produto")
    } else {
        const ultimoId = ultimoId();
        const novoProduto = {
            id: ultimoId + 1,
            url: caminhoDaImagem,
            categoria: categoria.value,
            nome: nome.value,
            preco: parseFloat(preco.value), // Converte o preço para número (caso o usuário insira um valor decimal)
            descricao: descricao.value
          };
        
        fetch("https://my-json-server.typicode.com/guhmonarin/demo-api/produtos", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoProduto)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Produto cadastrado com sucesso', data)
        })
        .catch(error => {
            console.error("Erro ao cadastrar o produto:", error)
        })
    }
}