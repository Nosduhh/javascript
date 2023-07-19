function contar() {
    //Inicialização das Variaveis.
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var result = document.getElementById('resul')

    //Verificação se os campo então preenchidos. 
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        result.innerHTML = 'Impossivel contar...'
       // window.alert('[ERRO], Preencha as outros campos')
    } else {
        result.innerHTML = 'Contando... '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0){
            window.alert('Passa invalido considerando passo 1')
            p = 1
        }
        for (var c = i; c <= f; c += p) {
            result.innerHTML += `${c}`
        }
        if (i < f) {
            for (var c = i; c <= f; c += p) {
                result.innerHTML += `${c}`
            }
        } else {
            for (var c = i; c >= f; c -= p) {
                result.innerHTML += `${c}`
            }
        }
    }

}