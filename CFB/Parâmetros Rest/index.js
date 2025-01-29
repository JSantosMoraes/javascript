// Apenas utilize o spread no parâmetro da sua função ;)

function soma(...valores) {
    let res = 0
    for(let v of valores) {
        res += v
    }
    return res
}

console.log(soma(9,5,2,4,7,3,8))