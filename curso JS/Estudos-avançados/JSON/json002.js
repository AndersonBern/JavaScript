function buscarCep() {
    let cep = document.getElementById('cep').value;

    //FIZ A REQUIZIÇÃO DA API
    let ajax = new XMLHttpRequest();

    //FIZ A REQUISIÇÃO JÁ COM O CEP DESEJADO
    ajax.open('GET', 'https://viacep.com.br/ws/' + cep + '/json/');

    //PARA ENVIAR A REQUISIÇÃO
    ajax.send();

    //FUNÇÃO PAR AQUNDO CARREGAR
    ajax.onload = function () {

        //TRANSFORMEI O TEXTO EM OBJETO
        let obj = JSON.parse(this.responseText)

        //PEGUEI OS VALORES QUE EU QUERIA
        let logradouro = obj.logradouro;
        let cidade= obj.localidade;
        let estado = obj.uf;

        //MOSTREI NA TELA
        document.getElementById('res').innerHTML += '</br>Logradouro: '+logradouro+ '</br> Cidade: ' +cidade+ '</br> Estado: ' +estado;
    }
}

