// Dobrando os elementos da coleção

const converterInt=(e)=>parseInt(e)
const dobrar=(e)=>e*2
let num = ['1','2','3','4','5'].map(dobrar)
console.log(num)

/* Passando a coleção para inteiro

const converterInt=(e)=>parseInt(e)
let num = ['1','2','3','4','5'].map(converterInt)
console.log(num)

*/

/* Forma sem passar pela coleção

const el = document.getElementsByTagName('div')
const val = Array.prototype.map.call(el,({innerHTML})=>innerHTML)
console.log(val)

*/

/* Mexendo com o HTML

let el = document.getElementsByTagName('div')
el = [...el]
el.map((e,i)=>{
    e.innerHTML="CFB Cursos"
})

*/

/* Exemplo 2 de map (Retorna elemento)

const cursos = ['HTML','CSS','JavaScript','PHP','React']
let c = cursos.map((el,i)=>{
    return el
})

console.log(c)

*/

/* Exemplo 1 de map (Retorna elemento e posição)

const cursos = ['HTML','CSS','JavaScript','PHP','React']
cursos.map((el,i)=>{
    console.log(`Curso ${el} - Posição do curso no array: ${i}`)
})

*/