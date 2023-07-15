function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 15//data.getHours()

    msg.innerHTML = `O horário em tempo real é <strong>${hora}</strong> horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'imagens/amanhecermaior.png'
        document.body.style.background = '#E3BA49'
    } else if (hora > 12 && hora < 18) {
        //Boa tarde!
        img.src = 'imagens/entardecer.png'
        document.body.style.background = '#FF921C'
    } else {
        //Boa noite!
        img.src = 'imagens/anoitecer.png'
        document.body.style.background = '#011D43'
    }
}
