var idade = 75
if(idade < 16) {
    console.log(`Sua idade é ${idade}, então seu voto não é permitido`)
} else if (idade < 16 || idade > 65) {
    console.log(`Sua idade é ${idade}, então o voto é opcional`)    
} else {
    console.log(`Sua idade é ${idade}, então o voto é obrigatório`)
}