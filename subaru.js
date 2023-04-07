const bas = require('./pika')
// entendendo classes

class pessoa{
    
    constructor (idade, peso, altura, nome) {
        (this.sa = idade),
        (this.peso = peso),
        (this.altura = altura),
        (this.nome = nome)
    }

}
for (let a = 0; a < 20; a++) {
    
    var bite = Math.floor(Math.random(1, 2));
    var sas = ["igor", "astúrias", "labão"];
    let clu = bite * sas.length;
    sas = sas.sort(() => Math.random(1, 2) - 0.5);
    var bis = sas[0]
    console.log(bis); 
}

const humano = new pessoa("???", "???", "???", bis);
console.log(humano);

// método dentro de classe

class ser{
    
    constructor (idade, peso, altura, nome) {
        (this.idade = idade),
        (this.peso = peso),
        (this.altura = altura),
        (this.nome = nome)
    }

    pesoEaltura () {
        console.log(`${this.peso} + ${this.altura}`);
    }
    static putis (){
        console.log('blablabla');
    }
}
console.log(new ser('susu', 80, 90, 'pinto'));

//precisa ser estanciado pois ele precisa dos dado de peso e altura
const bu = new ser('ua', 29, 89, 'sus')
bu.pesoEaltura();

// n precisa ser estanciado pois n tem dado nenhum(tipo: idade, peso etc)
ser.putis()

class morto extends ser{
    constructor (nome) { super(nome) }
    faleceu () {console.log(` ${this.nome} morreu`);}
}


const morreu = new morto('jubirú');
morreu.faleceu()