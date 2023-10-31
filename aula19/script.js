//Escopo de função
function showCar() {
  var car = 'Fusca';
  console.log(car);
}

showCar(); // Fusca no console
//console.log(car); // Erro, carro is not defined

// Escopo de função pai

var carro = 'Santana';
function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro();
console.log(carro);

// Escopo de bloco, esse é um erro do js, pois não queremos que a var vaze do bloco, por isso é utilizado const e let;
if (true) {
  const mes = 'dezembro';
  console.log(mes);
}

// Var vaza o bloco

if (true) {
  var ano = '2023';
  console.log(ano);
}
console.log(ano); // vaza o bloco

// const e let não vazam

if (true) {
  const signo = 'peixes';
  console.log(signo);
}
//console.log(signo)// vai dar erro, não vaza o bloco

// outro exemplo
{
  var carro2 = 'BMW';
  const carro3 = 'AUDI';
  console.log(carro3); // a const só pega dentro do bloco
}
console.log(carro2);
//console.log(carro3)// vai dar erro, não vaza o bloco

// Exemplo de vazar no for loop
for (var i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i);

// Escrever com let o for loop, essa é a forma correta de se fazer para não vazar o escopo.
for (let i = 0; i <= 10; i++) {
  console.log(`Número ${i}`);
}

// como funciona o const

const mes = 'Janeiro';
//mes = 'Fevereiro'; // erro, tentou modificar o valor;
//const semana; // erro, declarou sem valor

const data = {
  dia: 30,
  mes: 'Outubro',
  ano: 2023,
};
data.dia = 28; // funciona e altera o objeto acima
// data = 'Janeiro' // erro
console.log(data);

// como funciona o let

let ano2;
ano2 = 2018;
ano2++;
console.log(ano2); // 2019

//let anos = 2020; // erro, redeclarou a variável
