let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function IsNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function InLista(n, l) {
    if(l.indexOf(Number(n)) != -1) { // se o valor do array "n" for diferente de -1 retorne true
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(IsNumero(num.value) && !InLista(num.value, valores)) { // so vai ser adicionado com o resultado das duas outras funções
        valores.push(Number(num.value))
        let item = document.createElement('option') //criando um option
        item.text = `Valor ${num.value} adicionado.` // dando o valor ao option
        lista.appendChild(item) // revelando o option no <select>
        res.innerHTML = ''
        
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' // tira o valor da caixa de texto
    num.focus() // seleciona o valor automaticamente
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma+= valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma de todos o valores foi ${soma}</p>`
        res.innerHTML += `<p>A media dos valores digitados é ${media}</p>`
    }
}