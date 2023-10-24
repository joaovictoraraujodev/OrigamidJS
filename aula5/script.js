if ((5 - 5) && (5 + 5)) {
  console.log('É verdadadeiro !')
} else {
  console.log('É falso !')
}

var x = 5 - 5;
var y = 5 + 5;
var total = x && y;
console.log(total)

// O resultante é falso já que resulta em 0;

var condicional = (5 + 5) && (5 + 5);
if (condicional) {
  console.log('É verdadeiro !', condicional);
} else {
  console.log('É falso !');
}


// Abaixo ele pega o primeiro resultado verdadeiro e mostra no console;
var condicional2 = (5 - 5) || (5 + 5) || (10 - 2);
console.log(condicional2);

// vamos para o switch case;

var corFavorita = 'Preto';

switch (corFavorita) {
  case 'Vermelho':
    console.log('Olhe para cima.')
    break;
  case 'Azul':
    console.log('Olhe para direita.')
    break;
  case 'Preto':
    console.log('Olhe para o centro.')
    break;
  default:
    console.log('Feche os olhos.')  
}

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 24;
var idadeAmor = 28;
if (minhaIdade > idadeAmor) {
  console.log ('Minha idade é maior !')
} else if (minhaIdade === idadeAmor) {
  console.log('A idade é igual')
} else {
  console.log('Minha idade é menor')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // valor 3 que é o ultimo valor verdadeiro;
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // truthy
var idade = 28; // truthy
var possuiDoutorado = false; // falsy
var empregoFuturo; // falsy
var dinheiroNaConta = 0; // falsy

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if (brasil > china) {
  console.log('Brasil tem mais habitantes do que a China')
} else if (brasil < china){
  console.log('Brasil tem menos habitantes do que a China')
} else {
  console.log('Brasil tem o mesmo tanto de habitantes que a China')
}
// O que irá aparecer no console? Falso
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console? Cão
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}