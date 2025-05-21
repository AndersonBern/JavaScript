
function começar () {
    
    tempo = setInterval(function(){
        var cronometro = document.getElementById('res').innerHTML;
        var soma = parseInt(cronometro)+1;
        document.getElementById('res').innerHTML = soma
    }, 1000);
}

function parar () {
    clearInterval(tempo);
    document.getElementById('res').innerHTML = 'Parou!!!'
}