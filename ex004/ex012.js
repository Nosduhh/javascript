
var agora = new Date() // Recebendo o horario em tempo real.
var hora = agora.getHours() // Recebendo o horario em tempo real.
console.log(`São exatamente ${hora}`)
if (hora < 12) {
    console.log('Bom dia!')

}
else if (hora < 18) {
    console.log('Boa Tarde!')
}
else {
    console.log('Boa Noite!')
}