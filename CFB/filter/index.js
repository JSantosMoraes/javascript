const idades = [15,21,30,17,18,44,12,50]
const maior = idades.filter((val,ind,arr)=>{
    if(valor >= 18)
        return val
})

const menor = idades.filter((val,ind,arr)=>{
    if(valor < 18)
        return val
})

// const filtroMaior18 = (valor,indice,array)=> {

console.log(idades)
console.log(maior)
console.log(menor)