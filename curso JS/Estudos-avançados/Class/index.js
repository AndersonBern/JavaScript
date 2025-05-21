class Carro{
    constructor(v1, v2, v3){
        this.marca = v1;
        this.modelo = v2;
        this.ano = v3;
    }
    buzina(){
        return this.modelo + ' Buzinou: Biiiii!'
    }
}

const uno = new Carro('Fiat', 'Uno', 2001);

const gol = new Carro('Volkswagen', 'Gol', 2006)

gol.ano = 2010;

console.log(uno.buzina())
console.log(gol)