let amigo = {nome: 'Pedro', sexo: 'M', peso: 84.5, 
engordar(p = 0){
    if (p != 0) {
        console.log('Engordou!')
        this.peso += p 
    }else {
        return p
    }
    
} }

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg.`)