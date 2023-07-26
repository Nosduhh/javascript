// Aqui vai o script 
var num = document.querySelector('input#numero')
var lista = document.querySelector('select#lista')
var res = document.querySelector('div#res')
var valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function isLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar() {
    if (isNumero(num.value) && !isLista(num.value, valores)) {
        valores.push(Number(num.value))
        var itens = document.createElement('option')
        itens.text = `O Valor ${num.value} foi adicionado.`
        lista.appendChild(itens)
        res.innerHTML = ''
    } else {
        window.alert('Valor invalido ou já encontrado na lista')
    }
    num.value = '' // Para fazer o campo digitado limpar após ser digitado.
    num.focus() // Colocar o cursor após ser limpado a caixa. 
}
function finalizar() {
    if (valores.length == 0) {
        window.alert('Valor vazio, porfavor tente digitar um número.')
    } else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for (var pos in valores) {
            soma += valores[pos]

            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>O total de numeros cadastrados são ${tot}.</p>`
        res.innerHTML += `O maior número é ${maior}.<br>`
        res.innerHTML += `O menor número é ${menor}.<br>`
        res.innerHTML += `A soma de todos os número são ${soma}.<br>`
        res.innerHTML += `A media dos números são ${media}.`
    }

}