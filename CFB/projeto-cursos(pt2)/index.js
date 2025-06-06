const caixaCursos = document.querySelector('#caixaCursos')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('c1_2')
const cursos = ['HTML','CSS','Javascript','PHP','React','MySQL','ReactNative']
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')
const btnRemoveCurso = document.getElementById('btnRemoverCurso')
const btnAdicionarNovoCursoAntes = document.getElementById('btnAdicionarNovoCursoAntes')
const btnAdicionarNovoCursoDepois = document.getElementById('btnAdicionarNovoCursoDepois')
const nomeCurso = document.getElementById('nomeCurso')

let indice = 0

const criarNovoCurso = (curso)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id','c'+indice)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML = curso

    const comandos = document.createElement('div') // Criando a div com a classe 'comandos'
    comandos.setAttribute('class','comandos')

    const rb = document.createElement('input') // Criando um input
    rb.setAttribute('type','radio')
    rb.setAttribute('name','rb_curso')

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    return novoElemento
}

cursos.map((el,chave)=>{ // Criação dos elementos via JS

    const novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})

const radioSelecionado=()=>{
    const todosRadios = [...document.querySelectorAll('input[type=radio]')]
    const radioSeleciondo = todosRadios.filter((ele)=>{
        return ele.checked
    })
    return radioSeleciondo[0]
}

btnCursoSelecionado.addEventListener('click',()=>{ // Funcionando
    const rs = radioSelecionado()
    try{
        const cursoSelecionado = rs.parentNode.previousSibling.textContent
        alert(`Curso Selecionado: ${cursoSelecionado}`)
    } catch {
        alert('Selecione um curso')
    }
})

btnRemoveCurso.addEventListener('click',()=>{ // Funcionando
    const rs = radioSelecionado()
    if(rs != undefined){
    const cursoSelecionado = rs.parentNode.parentNode
    cursoSelecionado.remove()
    } else {
        alert('Selecione um curso')
    }
})

btnAdicionarNovoCursoAntes.addEventListener('click',()=>{ // Funcionando
    const rs = radioSelecionado()
    try{
        if(nomeCurso.value != ''){
        const cursoSelecionado = rs.parentNode.parentNode
        const novoCurso = criarNovoCurso(nomeCurso.value) // Pega o valor escrito pelo usuário
        caixaCursos.insertBefore(novoCurso,cursoSelecionado) // Adiciona anteriormente ao curso selecionado
        } else {
            alert('Digite o nome do curso')
        }
    } catch {
        alert('Selecione um curso')
    }
})

btnAdicionarNovoCursoDepois.addEventListener('click',()=>{
    const rs = radioSelecionado()
    try{
        if(nomeCurso.value != ''){
        const cursoSelecionado = rs.parentNode.parentNode
        const novoCurso = criarNovoCurso(nomeCurso.value) // Pega o valor escrito pelo usuário
        caixaCursos.insertBefore(novoCurso,cursoSelecionado.nextSibling) // Adiciona anteriormente ao PRÓXIMO irmão do curso selecionado
        } else {
            alert('Digite o nome do curso')
        }
    } catch {
        alert('Selecione um curso')
    }
})

// nextSibling
// previousSibling

