// nomeie 3 propriedades ou métodos de strings
nome = 'João';
console.log(nome.toLowerCase());
console.log(nome.toUpperCase());
console.log(nome.length);
// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
  console.log('Você clicou');
});

addEventListener('scroll', function () {
  console.log('Você scrollou a página');
});

addEventListener('mousemove', function () {
  console.log('Você moveu o mouse');
});

btn.addEventListener('mouseover', function () {
  console.log('Você passou o mouse em cima');
});

btn.addEventListener('mouseout', function () {
  console.log('Você saiu do botão');
});
//addEventListener
//appendChild
//id
//innerHTML
//outerHTML


// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
navigator.clipboard.writeText('Texto que será copiado')
navigator.clipboard.readText().then(text => {
  console.log('Texto colado:', text)
})