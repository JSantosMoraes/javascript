const caixa1 = document.querySelector('#caixa1')
const btn_c1 = document.querySelector('#c1')
const cursos = [...document.querySelectorAll('.cursos')] // Pegando todos os elementos de classe "cursos"

caixa1.addEventListener('click',(evt)=>{ // A caixa da o retorno "clicou!"
    console.log('clicou!')
    console.log(evt)
})

cursos.map((el)=>{ // Todos os elementos ".cursos" que forem clicados não retornarão "clicou!"
        el.addEventListener('click',(evnt)=>{
        evnt.stopPropagation()
    })
})

