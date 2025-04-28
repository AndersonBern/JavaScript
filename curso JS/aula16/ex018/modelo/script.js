let vetor = []
let res = document.getElementById('res')

function adicionar() {
    let n = document.getElementById('txtnum')
    let num = Number(n.value)
    let sel = document.getElementById('sel')
    

    if (num <= 0 || num >= 100) {
        alert('[ERRO] Valor invalido!')
        n.value = ''
        n.focus()
        return

    } else {
        for (let c in vetor){
            if (vetor[c] == num){
                alert('[ERRO] Valor já adicionado!')
                n.value = ''
                n.focus()
                return
            }else {}
            
        }
        vetor.push(num)
        let item = document.createElement('option')
        item.text = `Numero ${num} foi adicionado`
        sel.appendChild(item)
        res.innerHTML = vetor
        n.value = ''
        n.focus()
        return
    }
     
}

function finalizar() {
    vetor.sort()

    let maior = 0
    let menor = 0
    let soma = 0
    let media = 0

    for(let pos in vetor) {
        soma += vetor[pos]
        
    }
    maior = vetor[vetor.length - 1]
    menor = vetor[0]
    media = soma / vetor.length

    res.innerHTML += `<p>Ao todo temos ${vetor.length} adicionados.</p>`
    res.innerHTML += `<p>O MAIOR valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O MENOR valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p>A MÉDIA dos valores é: ${media}</p>`
    
}