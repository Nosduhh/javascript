function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 21
    msg.innerHTML = `O horário em tempo real é <strong>${hora}</strong> horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'amanhecermaior.png'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = 'entardecer.png'
    } else {
        //Boa noite!
        img.src = 'anoitecer.png'
    }
}
