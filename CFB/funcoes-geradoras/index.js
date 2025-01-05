// Usando for Of

function* contador(){
    let i = 0
    while(true){
        yield i++
        if(i > 5){
            break
        }
    }
}

const itc = contador()
for(let c of itc){ // Execução infinita
    console.log(c)
}

/* Usando for

function* contador(){
    let i = 0
    while(true){
        yield i++
    }
}

const itc = contador()
for(let i=0; i <= 10; i++){ // Vou chamar minha função de acordo com o valor de "i"
    console.log(itc.next().value)
}
*/


/* Armazenado os valores de yield dentro das constantes.

function* perguntas(){
    const nome = yield 'Qual o seu nome?' // Armazena no momento da chamada.
    const esporte =  yield 'Qual o seu esporte favorito?'
    return `Seu nome é ${nome}, e seu esporte favorito é ${esporte}`
}

const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next('Bruno').value) // A constante do próximo yield receberá "Bruno"
console.log(itp.next('Futebol').value)

*/

/* Usando funções geradoras eu posso retornar valores ao longo da função a cada "yield".

function* cores(){
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}

let itc=cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value) // Undefined

*/