function contar() {
    var i = document.getElementById('inicio')
    var f = document.getElementById('fim')
    var p = document.getElementById('passo')

    var inicio = Number(i.value)
    var fim = Number(f.value)
    var passo = Number(p.value)

    var res = document.getElementById('res')
    

    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        alert('[Erro} Faltam dados!')

    }else {
        res.innerHTML = '<p>Contando...</p>'

        if (passo <= 0)

            alert('[ERRO]asso invalido!')
            passo = 1

        if (inicio < fim) { //Contagem crescente
            while (inicio <= fim) {
                res.innerHTML += `${inicio} \u{1F449}`
                inicio = inicio + passo

            }
        }else { //Contagem decrescente
            while (inicio >= fim) {
                res.innerHTML += `${inicio} \u{1F449}`
                inicio = inicio - passo
            }

        }
        res.innerHTML += `\u{1F3C1}`
    }

    

}