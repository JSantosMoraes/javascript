// São funções que não tem um nome associado ao seu contéudo.

let f= new Function("v1","v2","v3", "return v1 + v2 + v3") // Função Construtor Anônima
console.log(f(10,5, 15))