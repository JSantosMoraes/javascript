function aluno(nome,nota){ // O operador "this" criou a variavel "nome", que posteriormente recebeu o valor do parâmetro "nome"
    this.nome = nome
    this.nota = nota

    this.dados_arrow = function(){
        setTimeout(()=>{ // "setTimeout" Cria uma atraso na execução
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }
}

const al1 = new aluno('Bruno', 100)
al1.dados_anonimo()
al1.dados_arrow()