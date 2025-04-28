let vetor = [1, 2, 3, '*', 4, 5, 6]
let n1 = ''
let n2 = ''

for(let pos in vetor) {
    if (vetor.indexOf('+') > pos) {
        n1 += vetor[pos]
    }
    else if (vetor.indexOf('-') > pos) {
        n1 += vetor[pos]
    }
    else if (vetor.indexOf('*') > pos) {
        n1 += vetor[pos]
    }
    else if (vetor.indexOf('/') > pos) {
        n1 += vetor[pos]
    }
    else {
        pos++
        n2 += vetor[pos]
    }

}

console.log(n1)
console.log(n2)