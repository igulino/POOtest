function papa() {
   const dank = {obj: "", obj2: ""}
   return dank
}

let A = papa();
A.obj = "auau",
A.obj2 = "uiui"

function bolo() {
    const ingr = {farinha: "", ovo: Number, leite: ""};

    function junta() {
        return `${ingr.farinha} e ${ingr.leite}`
    };

    ingr.junta = junta();
    return ingr
}

var mercado = bolo();

mercado.farinha = "salmoleve"; mercado.leite = 'susa'; mercado.ovo = 89;
console.log(mercado);

var mercado2 = bolo();
mercado2.farinha = "saas"; mercado2.leite = 'sauli', mercado2.ovo = 24;
console.log(mercado2);



//carros e aviões
function motores(carros, aviões) {
    let factory = {}
    factory.carros = carros;
    factory.aviões = aviões;

    function leitor() {
        return `${factory.carros} e ${factory.aviões}`
    }

    factory.func = leitor()
    return factory;
};


var compradora1 = motores('Tesla', 'Jato');
var compradora2 = motores('bulgati', 'comercial');
console.log(compradora1);
console.log(compradora2.func);