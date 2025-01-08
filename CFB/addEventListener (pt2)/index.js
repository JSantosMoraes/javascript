const caixa1 = document.getElementById('caixa1')
const caixa2 = document.getElementById('caixa2')
const btn = document.getElementById('btn_transferir')
const todosCursos = [...document.querySelectorAll('.curso')]

todosCursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        const curso = evt.target // Tudo que tem a classe "curso" pode ser selecionado
        curso.classList.toggle('selecionado') // Adiciona a class "selecionado" ao elemento clicado
    })
})

btn.addEventListener('click', ()=>{
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')] // Quais elementos
    const cursosNãoSelecionados = [...document.querySelectorAll('.curso:not(.selecionado)')] // dos elementos que possuem a classe "curso", traga pra mim os que não tem a classe "selecionado"

    cursosSelecionados.map((el)=>{ // Achando os elementos
        caixa2.appendChild(el) // Elementos aparecem no caixa 2
    })

    cursosNãoSelecionados.map((el)=>{
        caixa1.appendChild(el)
    })
})
