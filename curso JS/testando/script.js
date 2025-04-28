function verificar() {
    var regiao = document.getElementsByName('regiao')
    var res = document.getElementById('res')
    var origem = ''

    if (regiao[0].checked) {
        origem = 'Nordestino(a)'

    }else if (regiao[1].checked) {
        origem = 'Sudestista'

    }else if(regiao[2].checked) {
        origem = 'Nortista'

    }else if(regiao[3].checked) {
        origem = 'Sulista'

    }else if(regiao[4].checked) {
        origem = 'Centrista'

    }

    var sexo = document.getElementsByName('sexo')
    var genero = ''

    var img = document.createElement('img')

    res.style.textAlign = 'center'

    if (sexo[0].checked) {
        genero = 'Homem'
        img.setAttribute('src', 'adultomasc.png')
    }else {
        genero = 'Mulher'
        img.setAttribute('src', 'adultofem.png')
    }
    res.innerHTML = `Você é ${genero} ${origem}!`
    res.appendChild(img)
}


