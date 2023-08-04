const usuarios = [
    {
        usuario: "Teste1",
        login: "teste@gmail.com",
        senha: "teste"
    },
    {
        usuario: "Teste2",
        login: "teste2@gmail.com",
        senha: "teste2"
    },
]

const entrar = document.getElementById('entrar')

entrar.addEventListener('click', logar)

function logar (e) {
    e.preventDefault();
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    if (email === '') {
        alert("Email em branco. Por favor preencha")
    } else {
        if (senha === ''){
            alert("Senha em branco. Por favor preencha")
        } else {
            validarUsuario(email, senha);
        }
    }
    
}

function validarUsuario(email, senha) {
    const usuarioEncontrado = usuarios.find(function (usuario) {
        return usuario.login === email && usuario.senha === senha;
    });

    if (usuarioEncontrado) {
        window.location.href = "novo-produto.html";
    } else {
        alert("Login ou senha incorretos. Por favor, tente novamente.");
    }
}

