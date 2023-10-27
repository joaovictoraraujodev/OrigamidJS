// Crie uma função para verificar se um valor é Truthy

function verificarTruthy(valor) {
  return !! valor;
}
console.log(verificarTruthy(0));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado) {
//  var somaLados = lado * 4;
//  return `O perimetro do quadrado é ${somaLados}`;
  return lado * 4;
}
console.log(perimetro(10));
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function dados(nome, sobrenome) {
  var nome = 'João';
  var sobrenome = 'Araujo';
  return `Meu nome é ${nome} ${sobrenome}`;
}
console.log(dados());
// Crie uma função que verifica se um número é par
function parImpar(numero) {
  if (numero % 2 === 0) {
    return 'Número par';
  } else {
    return 'Número impar';
  }
}
console.log(parImpar(1));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(tipo) {
  return typeof tipo;
}
console.log(tipoDado(true));
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function () {
  console.log('Olá meu nome é João Araújo');
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
