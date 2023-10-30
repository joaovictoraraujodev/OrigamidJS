// DOT NOTATION GET
var menu = {
  width: 1000,
  height: 50,
  backgroundColor: '#84E',
};

var bg = menu.backgroundColor;

menu.esconder = function () {
  console.log('Escondi');
};

// DOT NOTATION SET

var menu = {
  width: 1000,
  height: 50,
  backgroundColor: '#84E',
};

menu.backgroundColor = '#000';
menu.backgroundColor = 'blue';
console.log(menu.backgroundColor);

// Exemplo substituição de propriedade

var menu = {};
menu.width = 800;
menu.height = 50;
menu.position = 'fixed';

// Palavra-chave this

var height = 120;
var menu = {
  width: 1000,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  },
};

console.log(menu.metadeHeight());

// Protótipo e Herança

menu.hasOwnProperty('width'); // true
menu.hasOwnProperty('height'); //true
menu.hasOwnProperty('display'); //false