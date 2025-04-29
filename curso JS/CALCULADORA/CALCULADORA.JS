let n1 = ''
let n2 = ''

let vetor = []

let res = document.getElementById('res')

let soma = 0
let sub = 0
let mult = 0
let div = 0
let result = 0

function resultado() {

    for(let pos in vetor) {
        if (vetor.indexOf('+') > pos) {
            n1 += vetor[pos]
            soma = true
        }
        else if (vetor.indexOf('-') > pos) {
            n1 += vetor[pos]
            sub = true
        }
        else if (vetor.indexOf('*') > pos) {
            n1 += vetor[pos]
            mult = true
        }
        else if (vetor.indexOf('/') > pos) {
            n1 += vetor[pos]
            div = true
        }
        else {
            pos++
            if (pos < vetor.length){
                n2 += vetor[pos]
            }
        }
    
    }
    let v1 = parseFloat(n1)
    let v2 = parseFloat(n2)


    if (soma == true) {
        soma = v1 + v2
        result = soma
    }
    else if (sub == true) {
        sub = v1 - v2
        result = sub
    }
    else if (mult == true) {
        mult = v1 * v2
        result = mult
    }
    else if (div == true) {
        div = v1 / v2
        result = div
    }
    
    res.innerHTML = `${result}`
    vetor = []
    vetor.push(result)
    v1 = result
    v2 = 0
    n1 = ''
    n2 = ''
}

function zerar() {
    vetor = []
    soma = 0
    sub = 0
    mult = 0
    div = 0
    res.innerHTML = '<p>Vamos calcular...</p>'
}

function botao1() {
    if (vetor.length == 1 && vetor[0] == result){
        vetor = []
        vetor.push('1')
        res.innerHTML = '1'
    }
    else {
        vetor.push('1')
        res.innerHTML += ' 1 '
    }
}

function botao2() {
    if (vetor.length == 1 && vetor[0] == result){
        vetor = []
        vetor.push('2')
        res.innerHTML = '2'
    }
    else{
        vetor.push('2')
    res.innerHTML += ' 2 '
    }
}

function botao3() {
    if (vetor.length == 0 || vetor[0] == result) {
        vetor = []
        vetor.push('3')
        res.innerHTML = '3'
    }
    else{
        vetor.push('3')
        res.innerHTML += ' 3 '
    }  
}

function botao4() {
    if (vetor.length == 0 || vetor[0] == result) {
        vetor = []
        vetor.push('4')
        res.innerHTML = '4'
    }
    else{
        vetor.push('4')
        res.innerHTML += ' 4 '
    }    
}

function botao5() {
    if (vetor.length == 0 || vetor[0] == result) {
        vetor = []
        vetor.push('5')
        res.innerHTML = '5'
    }
    else{
        vetor.push('5')
        res.innerHTML += ' 5 '
    }    
}

function botao6() {
    if (vetor.length == 0 || vetor[0] == result) {
        vetor = []
        vetor.push('6')
        res.innerHTML = '6'
    }
    else{
        vetor.push('6')
        res.innerHTML += ' 6 '
    }    
}
function botao7() {
    if (vetor.length == 0 || vetor[0] == result) {
        vetor = []
        vetor.push('7')
        res.innerHTML = '7'
    }
    else{
        vetor.push('7')
        res.innerHTML += ' 7 '
    }
    
}
function botao8() {
    if (vetor.length == 0 || vetor[0] == result) {
        vetor = []
        vetor.push('8')
        res.innerHTML = '8'
    }
    else{
        vetor.push('8')
        res.innerHTML += ' 8 '
    }
    
}
function botao9() {
    if (vetor.length == 0 || vetor[0] == result) {
        vetor = []
        vetor.push('9')
        res.innerHTML = '9'
    }
    else{
        vetor.push('9')
        res.innerHTML += ' 9 '
    }
    
}
function botao0() {
    if (vetor.length == 0 || vetor[0] == result) {
        vetor = []
        vetor.push('0')
        res.innerHTML = '0'
    }
    else{
        vetor.push('0')
        res.innerHTML += ' 0 '
    }
    
}
function botaoSoma() {
    vetor.push('+')
    res.innerHTML += ' + '
    
}
function botaoSub() {
    vetor.push('-')
    res.innerHTML += ' - '
    
}
function botaoMult() {
    vetor.push('*')
    res.innerHTML += ' * '
    
}
function botaoDiv() {
    vetor.push('/')
    res.innerHTML += ' / '
    
}


