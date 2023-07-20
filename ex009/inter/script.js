function tabuada() {
    var num = document.getElementById('num')
    var tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número')
    } else {
        var n = Number(num.value) // conversão string para número.
        var c = 1 // Inicialização da variavel, para estrutura de repetição.
        tab.innerHTML = ''
        while(c <= 10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}