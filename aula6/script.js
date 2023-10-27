// funções

function areaQuadrado(lado) {
  return lado * lado;
}

// function calcular area quadrado

console.log(areaQuadrado(5));

function pi() {
  return 3.14;
}

var total = 2 * pi();
console.log(total);

// function imc

function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

console.log(imc(115, 1.8));

// function cor favorita

function corFavorita(cor) {
  if (cor === 'Azul') {
    return 'Você gosta de Azul.';
  } else if (cor === 'Vermelho') {
    return 'Você gosta de Vermelho';
  } else {
    return 'Você não gosta de nenhuma cor';
  }
}

console.log(corFavorita());

// function callback, função que ocorre depois que algo acontece.

addEventListener('click', function () {
  console.log('Olá, você clicou na página');
});
// A função possui dois argumentos
// Primeiro é a string 'click'
// A segunda é () uma função anônima 

// Outra forma de ser feito

function mostraConsole(){
  console.log('Essa é a segunda forma de fazer a função.')
}

addEventListener('click', mostraConsole);