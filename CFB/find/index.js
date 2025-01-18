const p_array = document.querySelector('#array')
const txt_pesquisar = document.querySelector('#txt_pesquisar')
const btnPesquisar = document.querySelector('#btnPesquisar')
const resultado = document.querySelector('#resultado')

const elementos_array = ['html','css','javascript']
p_array.innerHTML = `[${elementos_array}]`

btnPesquisar.addEventListener('click',(evt)=>{
    resultado.innerHTML = 'Valor indefinido'
    const ret = elementos_array.find((e,i)=>{
        if(e.toLowerCase() === txt_pesquisar.value.toLowerCase()){
            resultado.innerHTML = `Valor pesquisado ${e} na posição ${i}`
            return e
        }
    })
})