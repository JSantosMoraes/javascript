function criarPessoa(nome, idade) {
    return {
        nome: nome,
        idade: idade,
        
        getNome: function() {
            return this.nome;
        },
        getIdade: function() {
            return this.idade;
        },
        setNome: function(novoNome) {
            this.nome = novoNome;
        },
        setIdade: function(novaIdade) {
            this.idade = novaIdade;
        }
    };
}

let listapessoas = [];

const botao_adicionar = document.querySelector('#btn_add');
const resposta = document.querySelector('.res');

const addPessoa = () => {
    resposta.innerHTML = '';

    listapessoas.forEach((p) => {
        const div = document.createElement("div");
        div.setAttribute("class", "pessoa");
        div.innerHTML = `Nome: ${p.getNome()}<br/>Idade: ${p.getIdade()}`;
        resposta.appendChild(div);
    });
};

botao_adicionar.addEventListener('click', () => {
    const name = document.querySelector("#f_nome");
    const age = document.querySelector("#f_idade");

    const nomeTrimmed = name.value.trim();
    const idadeTrimmed = parseInt(age.value.trim());

    if (nomeTrimmed === '' || idadeTrimmed === '') {

        alert('[ERRO] Adicione os dados necessários');
        name.value = "";
        age.value = "";
        name.focus();
        addPessoa();

    } else if(Number.isNaN(idadeTrimmed)) {

        alert('[ERRO] A idade adicionada não é um número inteiro')
        name.value = "";
        age.value = "";
        name.focus();
        addPessoa();

    } else {
        const novaPessoa = criarPessoa(nomeTrimmed, idadeTrimmed);
        listapessoas.push(novaPessoa);
        name.value = "";
        age.value = "";
        name.focus();
        addPessoa();
    }
});
