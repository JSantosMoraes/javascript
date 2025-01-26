/* Ela não permite dois elementos duplicados (aula 55)*/

const caixa=document.querySelector("#caixa")

let musicas=new Set(["musical", "musica boa","musica10"])

musicas.add("musica muito legal")
musicas.add("musical")

musicas.add("musical")
musicas.add("musica10")

musicas.delete("musical")
musicas.clear() // TIRE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

console.log(musicas)

// musicas.forEach((el)=>{
//     caixa.innerHTML+=el +"<br/>"
// })

for(let m of musicas){
    caixa.innerHTML+=m +"<br/>"
}