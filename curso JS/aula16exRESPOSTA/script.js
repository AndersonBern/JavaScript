let num = document.querySelector('input#txtnum')
let lista = document.querySelector('select#sel')
let res = document.querySelector('div#res')
let valores = []

//Vai testar se o 'n' é maior que 1 e menor que 100. sendo assim apto
//a ir para o proximo tratamento 'inLista()'.
function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}
//Vai pegar o '.indexOf' de 'valores', e testar se o 'n' está na lista
//e se for diferente de '-1',o numero não estava na lista.
//E sendo assim, apto a entrar na lista.
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }

}

//Vai chamar as funnções: 'isNumero' e 'inLista'. Caso for TRUE, vai 
//adicionar o 'num' a lista 'valores'. E ao 'select'.
function adicionar() {
    if (isNumero(num.value) && ! inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''

    } else {
        alert('Valor invalido ou já existente na lista!')
    }
    num.value = ''
    num.focus()
}
function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')

    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        //Vai testar cada valor da lista 'valores' e encontrar o maior
        //e o menor valor. Já que as variaveis 'maior' e 'menor' receberam 
        //o primeiro valor da lista 'valores[0]'. 
        for (let pos in valores) {
            if (valores[pos] > maior) {
                maior = valores[pos] 
            
            }if (valores[pos] < menor) {
                menor = valores[pos]
            }
            soma += valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O MAIOR valor informado foi ${maior}.</p>` 
        res.innerHTML += `<p>O MENOR valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média do valores é ${media}.</p>`

    }

}