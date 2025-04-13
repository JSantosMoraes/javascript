const objs = [{
    nome: 'Matheus',
    idade: 30,
    esta_trabalhando: true,
    detalhes_profissao:{
        profissao: 'Programador',
        empresa: 'Empresa X'
    },
    hobbies:['Programar','Correr','Ler']
},
{
    nome: 'João',
    idade: 25,
    esta_trabalhando: false,
    detalhes_profissao:{
        profissao: null,
        empresa: null
    },
    hobbies:['Jogar','Academia']
},
]

const jsonData = JSON.stringify(objs) // Convertendo o objeto para JSON

console.log(jsonData)

// Convertendo JSON para objeto

const objData = JSON.parse(jsonData);

console.log(objData)