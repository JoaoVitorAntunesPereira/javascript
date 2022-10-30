//console.log("Olá Mundo!")
//const ola="Olá Mundo";
let carro = {
    rodas:4,
    portas:2,
    nome:"um carro",
    aVenda:true
};

const funcao = function(){
    console.log("Olá Mundo")
    const a1 = 1;
    const a2 = 3;
    const a3 = a1+a2;
    console.log(a3)
    console.log(a1+a2+a3);
    console.log(a1+a2);
}

function Nomes(){
    const nome1 = "João";
    const nome2 = "Vitor";
    const nome3 = nome1+nome2;
    console.log(nome1);
    console.log(nome2);
    console.log(nome3);
    console.log(nome1+nome2);
}

const somar = function(valor1,valor2){
    const resultado = valor1+valor2;
    console.log(resultado)
}

const Somar = function(Valor1,Valor2){
    const Resultado = Valor1+Valor2;
    return Resultado;
}

let SOMAR = function(VALOR1,VALOR2){
    return VALOR1 + VALOR2;
}

let RESULTADO = SOMAR(10,10);

funcao();
Nomes();
somar("oi","ola");
somar(4,4);
somar(99,1);
