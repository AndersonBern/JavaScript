let vetor = []

function adicionar(n) {
    if (n <= 0 || n >= 100) {
        console.log('[Erro] Valor invalido!')

    }
    else {
        for (let pos in vetor) {
            if (vetor[pos] == n) {
                console.log('Erro! Valor já existe.')
                return n
                
            }else {}
        }
        console.log('Valor adicionado!')
        vetor.push(n)
    }

}
console.log(adicionar(4))
console.log(vetor)