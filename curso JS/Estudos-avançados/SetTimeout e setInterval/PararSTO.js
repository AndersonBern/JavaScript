function começar () {
    contador = setTimeout(function(){
        console.log('Apareceu!!!')
    }, 4000);
}

function parar() {
    clearTimeout(contador);
    console.log('PAROU!')
}

começar()
parar()