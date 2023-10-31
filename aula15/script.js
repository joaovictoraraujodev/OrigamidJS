//Interação com array
var videoGames = ['Ps5', 'Xbox', 'Nintendo', '3DS'];

for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
}

// Break
var carros = ['FERRARI', 'BMW', 'AUDI', 'PORSCHE'];
for (var i = 0; i < carros.length; i++) {
  console.log(carros[i]);
  if (carros[i] === 'BMW') {
    break;
  }
}

//forEach
var jogos = ['LEAGUE OF LEGENDS', 'VALORANT', 'COUNTER STRIKE', 'CALL OF DUTY'];
jogos.forEach(function (item) {
  console.log(item);
});

var frutas = ['Melancia', 'Melão', 'Maça', 'Amora'];
frutas.forEach(function (item) {
  console.log(item);
});
// O argumento item será atribuido dinamicamente

//Não se confunda com a sintaxe

var numero = 0;
var maximo = 50;
for (; numero <= maximo; ) {
  console.log(numero);
  numero++;
}

//Não aconselho escrever da forma acima, mas funciona normalmente