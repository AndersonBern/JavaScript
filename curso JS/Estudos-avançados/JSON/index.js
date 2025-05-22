const carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 2000
}

//CONVERTEU O OBJETO EM TEXTO
let texto = JSON.stringify(carro);

//MOSTROU NO HTML
document.getElementById('res').innerHTML = texto;

//CONVERTEU O TEXTO EM OBJETO
let obj = JSON.parse(texto);

console.log(obj.marca)