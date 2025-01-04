let saldo = document.getElementById('saldo')
let saldoint = parseInt(saldo.innerText)

function comprar() {
    if(saldoint >= 10){
        saldo.innerText -= 10
        saldoint -= 10
    } else {
        window.alert('[ERRO] Saldo Insuficiente')
    }
}