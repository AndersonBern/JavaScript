
function começar () {
    document.getElementById('res').innerHTML = 'Começou a contar...'

    tempo = setTimeout(function(){
        document.getElementById('res').innerHTML = 'Apareceu!!!';
    }, 2000);
}

function parar () {
    clearTimeout(tempo);
    document.getElementById('res').innerHTML = 'Parou!!!'
}