/*tudo feito por ia*/

const email = "jonassdm@hotmail.com";
const senha = "1290";

// Captura o formulário e os campos de entrada
const loginForm = document.querySelector("form");
const emailInput = document.getElementById("idemail");
const senhaInput = document.getElementById("idsenha");

// Adiciona um evento ao formulário para tratar o envio
loginForm.addEventListener("submit", function (event) { // <<<<<<<
  event.preventDefault(); // Impede o envio padrão do formulário // <<<<<<<

  // Obtém os valores digitados pelo usuário
  const emailValue = emailInput.value.trim(); // <<<<<<<
  const senhaValue = senhaInput.value.trim(); // <<<<<<<

  // Valida as credenciais
  if (emailValue === email && senhaValue === senha) {
    // Redireciona para a próxima página se os dados estiverem corretos
    window.location.href = "index2.html";
  } else {
    // Exibe uma mensagem de erro se os dados estiverem incorretos
    window.alert("Erro: Email ou senha incorretos!");
  }
});