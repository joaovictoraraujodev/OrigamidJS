var nome = 'Caroline';
console.log(nome.length); // le quantas letras tem
console.log(nome.charAt(0)); // mostra a letra na casa que você definir
console.log(nome.replace('ne', 'na')); // faz o replace da string
console.log(nome);

var altura = 1.8;

console.log(altura.toString()); // passa para string
console.log(altura.toFixed()); // arredonda o valor

// Funções

function areaQuadrado() {
  return lado * lado;
}

console.log(areaQuadrado.toString());
console.log(areaQuadrado.length);

// Elementos DOM

var btn = document.querySelector('.btn');
console.log(btn.classList.add('preto')); // adiciona a classe ao botão
console.log(btn.innerText);
btn.addEventListener('click', function () {
  console.log('Clicou');
});
