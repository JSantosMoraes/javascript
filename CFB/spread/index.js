// O operador spread e representado por três pontos "...", veja alguns exemplos abaixo:


// ESPALHANDO 'Curso' dentro das tags 'div' usando a função 'forEach'

const objs1 = document.getElementsByTagName('div')
const objs2 = [...document.getElementsByTagName('div')]

objs2.forEach(Element => {
    Element.innerHTML = 'Curso'
});

console.log(objs1)
console.log(objs2)

/* UTILIZANDO FUNÇÕES

const soma = (v1,v2,v3)=>{
    return v1+v2+v3
}

let valores=[1,5,4]

console.log(soma(...valores))
*/


/* UTILIZANDO OBJETOS

const jogador1 = {nome: "Bruno", energia: 100, vidas: 3, magia: 150}
const jogador2 = {nome: "Paulo", energia: 100, vidas: 5, veloidade: 80}
const jogador3 = {...jogador1,...jogador2}

console.log(jogador3)
*/