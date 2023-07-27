var pessoa = {
    nome: 'josé', sexo: 'M', peso: 90,
    engordar(p = 0) {
        console.log('Engordou')
        this.peso += p
    }
}
pessoa.engordar(4)
console.log(`A pessoa tem o nome ${pessoa.nome}, do sexo ${pessoa.sexo} e pesa ${pessoa.peso}.`)