// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dados = {
  nome: 'João',
  sobrenome: 'Araújo',
  nomeSobrenome() {
    return `${this.nome} ${this.sobrenome}`; // aqui eu fiz dentro do proprio objeto
  },
};
console.log(dados.nomeSobrenome());
// Crie um método no objeto anterior, que mostre o seu nome completo

// Aqui eu criei fora, funciona também
dados.nomeSobrenome = function(){
  return `${this.nome} ${this.sobrenome}`;
}
// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
};
carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: '10 anos',
  latir(pessoa){
    if(pessoa === 'homem'){
      return 'O cachorro late para o homem'
    }else {
      return 'O cachorro não late'
    }
  }
};

console.log(cachorro.raca);
console.log(cachorro.cor);
console.log(cachorro.idade);
console.log(cachorro.latir('homem'));
