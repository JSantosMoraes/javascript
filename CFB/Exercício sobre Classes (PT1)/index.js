// Tipo
const f_tipoMilitar = document.querySelector("#f_tipoMilitar")
const f_tipoNormal = document.querySelector("#f_tipoNormal")
// Atributos
const f_blindagem = document.querySelector("#f_blindagem")
const f_municao = document.querySelector("#f_municao")
const f_nome = document.querySelector("#f_nome")
const f_portas = document.querySelector("#f_portas")
// divs
const div_carros = document.querySelector("#carros")
const btn_addCarro = document.querySelector("#btn_addCarro")

let a_carros = []

f_tipoMilitar.addEventListener("click", (evt) => { // Radio Militar
    f_nome.value = ''
    f_portas.value = 0
    f_blindagem.value = 0
    f_municao.value = 0
    f_blindagem.removeAttribute("disabled")
    f_municao.removeAttribute("disabled")
})

f_tipoNormal.addEventListener("click", (evt) => { // Radio Normal
    f_nome.value = ''
    f_portas.value = 0
    f_blindagem.value = 0
    f_municao.value = 0
    f_blindagem.setAttribute("disabled", "disabled")
    f_municao.setAttribute("disabled", "disabled")
});

const gerenciarExibicaoCarros = () => {
    div_carros.innerHTML = ""
    a_carros.forEach((c) => {
        const div = document.createElement("div")
        div.setAttribute("class", "carro")
        div.innerHTML = `<strong>Nome:</strong> ${c.nome}<br/>`
        div.innerHTML += `<strong>Portas:</strong> ${c.portas}<br/>`
        div.innerHTML += `<strong>Cor:</strong> ${c.cor}<br/>`
        div.innerHTML += `<strong>Blindagem:</strong> ${c.blindagem}<br/>`
        div.innerHTML += `<strong>Munição:</strong> ${c.municao}<br/>`
        div_carros.appendChild(div)
    })
};

btn_addCarro.addEventListener("click", () => {
    div_carros.setAttribute('class','carros')
    if (f_tipoNormal.checked) {
        const c = new Carro(f_nome.value,f_portas.value)
        a_carros.push(c)
    } else {
        const c = new Militar(f_nome.value,f_portas.value,f_blindagem.value,f_municao.value)
        a_carros.push(c)
    }
    gerenciarExibicaoCarros()
    f_nome.value = ''
    f_portas.value = 0
    f_blindagem.value = 0
    f_municao.value = 0
})

class Carro { // Classe PAI // Classe Base
    constructor(nome,portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }
    ligar = function(){
        this.ligado = true

    }
    desligar = function(){
        this.ligado = false
        
    }
    setCor = function(cor){
        this.cor = cor
    }
}

class Militar extends Carro{ // A classe "Militar" vai herdar a classe "Carro" // Classe Filho
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor('Verde')
    }

    atirar = function(){
        if(this.municao > 0){
            this.municao--
        }
    }
}

class Utilitario extends Carro {
    constructor(nome,portas,lugares){
        super(nome,portas)
        this.lugares = lugares
    }
}

const c1 = new Carro('Normal',4)
c1.ligar()
c1.setCor('preto')

const c2 = new Militar('Lutador',1,100,50)
// c2.setCor('Azul')
c2.atirar()
c2.atirar()
c2.atirar()

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${(c1.ligado?'Sim':'Não')}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log(`-----------------------------`)

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${(c2.ligado?'Sim':'Não')}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Cor: ${c2.cor}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.municao}`)
console.log(`-----------------------------`)