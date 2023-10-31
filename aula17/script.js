// Atribuição e ternário
var x = 5;
var y = 10;

var tempX = x;

tempX += y;
console.log(tempX);

tempX = x;
tempX -= y;
console.log(tempX);

tempX = x;
tempX *= y;
console.log(tempX);

tempX = x;
tempX /= y;
console.log(tempX);

tempX = x;
tempX %= y;
console.log(tempX);

tempX = x;
tempX **= y;
console.log(tempX);

//
var numero = 20;
var numero2 = 10;
numero /= 10;
console.log(numero);

//

var idade = 18;
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber'; // não faz sentido retornar valor boolean.
console.log(podeBeber);

// If abreviado

var possuiFaculdade = true;
if (possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');

// ou
// prefiro a segunda opção
if (possuiFaculdade) 
  console.log('Possui Faculdade');
else
  console.log('Não possui faculdade');