// addEventListener('Evento', funções,função anônima, arrow function, variáveis etc...)

const cursos = [...document.querySelectorAll('.curso')]

cursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        const el = evt.target // Descobrindo quem foi clicado
        el.classList.add('destaque')
        console.log(`${el.innerHTML} foi clicado!`) // Pegando o elemento pelo id
    })
})

