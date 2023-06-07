
//Assim que o botão é apertado troca a class do body
var botaoEntrar = document.querySelector("#entrar");
var botaoCriar = document.querySelector("#criar");

var body = document.querySelector("body");

botaoEntrar.addEventListener("click", function() {
    body.className = "entrar-js";
});

botaoCriar.addEventListener("click", function() {
    body.className = "criar-js";
});
//

//redirecionar para o menu de exercicios
function verificarCredenciais() {
    // Obtenha os valores digitados pelo usuário
    var email = document.getElementById('emailLogin').value;
    var senha = document.getElementById('senhaLogin').value;

    // Verifique as credenciais
    if (email === 'lucas.felixandrade@hotmail.com.br' && senha === '441228') {
      // Credenciais corretas, mostre a próxima página
      window.location.href="../menu.html"
    }
  }