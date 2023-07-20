var num = [5,7,9,3,8]
/*num.push(2) // Acrecenta o valor no vetor.
num.sort() // Coloca de forma ordenada o vetor.
console.log(`O numero são ${num}`)
console.log(`O tamanho do meu vetor ${num.length}`) // Mostra o tamanho do vetor.
console.log(`O valor da segunda do posição do vetor é ${num[1]}`) //Mostra o a posição do vetor.

for(var pos=0; pos <= num.length; pos++){ 
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
    // Percuso para exibição do vetor. 
    // Usando for comum.
}*/
for(var pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
    // Percuso para exibição do vetor.
    // Usando modo simplificado.
}