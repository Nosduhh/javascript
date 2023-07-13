var agora = new Date()
var dia_sem = agora.getDay()

/*  Dias da semana:
    0 - Domingo
    1 - Segunda 
    2 - Terça-feira
    3 - Quarta-feira
    4 - Quinta-feira
    5 - Sexta-feira
    6 - Sabado
 */

switch(dia_sem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2: 
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5: 
        console.log('Sexta')
        break
    case 6 :
        console.log('Sabado')
        break
    default:
        console.log('[Erro] Dia invalido!')
        break
}