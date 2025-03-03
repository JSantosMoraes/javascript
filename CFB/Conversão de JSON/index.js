const pessoa={
    nome: "Bruno",
    canal: "CFB Cursos",
    curso: "JavaScript",
    aulas:{
        aula01: "Introdução",
        aula02: "Variáveis",
        aula03: "Condicional"
    }
}

const string_pesssoa = '{"nome":"Bruno","canal":"CFB Cursos","curso":"JavaScript","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Condicional"}}'

const s_json_pessoa = JSON.stringify(pessoa) // Objeto para String JSON
const o_json_pessoa = JSON.parse(s_json_pessoa) // String JSON para Objeto

console.log(pessoa)
console.log(s_json_pessoa)