let valores = [8, 2, 5, 7, 9, 1]
valores.sort()

for(var pos = 0; pos < valores.length; pos++) {
    console.log(`O valor da posição ${pos} do vetor é ${valores[pos]}`)
}

for (let pos in valores){
    console.log(valores[pos])
}