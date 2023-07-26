// Aqui vai o script 
var num = document.querySelector('input#numero')
var lista = document.querySelector('select#lista')
var res = document.querySelectorAll('div#res')
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
        var total = valores.length

        res.innerHTMl = ''
        res.innerHTMl += `<p>O total dos valores são ${total}</p>`
    }
    
}