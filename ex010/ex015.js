var num = [5, 7, 2, 4, 8]
num.sort()
num.push()

console.log(num)
var pos = num.indexOf(4)// Função para procurar onde está o vetor.
if(pos == -1){
    console.log(`Valor invalido!`)
}else{
    console.log(`O valor solicitado está na posição ${pos}`)
}
