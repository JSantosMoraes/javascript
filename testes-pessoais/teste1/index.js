const email = "jonassdm@hotmail.com";
const senha = "1290";

const loginForm = document.querySelector("form");
const emailInput = document.getElementById("idemail");
const senhaInput = document.getElementById("idsenha");

loginForm.addEventListener("submit", function (event) { //pega o evento que ocorreu e...
  event.preventDefault(); // impede o envio do form

  const emailValue = emailInput.value.trim(); // remove os espaços em branco do inicio ao fim
  const senhaValue = senhaInput.value.trim(); 

  if (emailValue === email && senhaValue === senha) {
    window.location.href = "index2.html";
  } else {
    window.alert("Erro: Email ou senha incorretos!");
  }
});