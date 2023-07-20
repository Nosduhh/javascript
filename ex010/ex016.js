function parimpar(n){
    if(n%2 == 0){
        return 'par'
    }else{
        return 'impar'
    }
}
var n = parimpar(11)
console.log(`O número digitado é ${n}`)