function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('resposta')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','imagens/criançamenino.png')
            } else if (idade < 19) {
                //Adolecente
                img.setAttribute('src','imagens/adolecentehomem(1).png')
            } else if (idade < 29) {
                //jovem
                img.setAttribute('src','imagens/jovemhomem.png')
            } else if (idade < 50) {
                // Adulto 
                img.setAttribute('src','imagens/homemadulto.png')
            } else {
                //Idoso
                img.setAttribute('src','imagens/idosohomem.png')
            }

        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','imagens/criançamenina.png')
            } else if (idade < 19) {
                //Adolecente
                img.setAttribute('src','imagens/adolecentemenina.png')
            } else if (idade < 29) {
                //jovem
                img.setAttribute('src','imagens/mulherjovem.png')
            } else if (idade < 50) {
                // Adulto 
                img.setAttribute('src','imagens/mulheradulta.png')
            } else {
                //Idoso
                img.setAttribute('src','imagens/mulheridosa.png')
            }
        }
        res.style.textAlign = 'Center'
        res.innerHTML = `Detectamos uma pessoa <strong> ${genero}</strong> com <strong>${idade}</strong> anos.`
        res.appendChild(img)
    }
}