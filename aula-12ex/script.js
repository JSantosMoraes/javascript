function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = '1.png'
        document.body.style.background = '#d9dde0'
    } else if (hora >= 12 && hora < 18){
        // BOA TARDE!
        img.src = '2.png'
        document.body.style.background = '#4b6d8e'
    } else {
        // BOA NOITE!
        img.src = '3.png'
        document.body.style.background = '#071011'
    }

}
