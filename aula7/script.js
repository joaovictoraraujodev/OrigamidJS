// funções 2
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

imc(80, 1.8); // retorna o imc
console.log(imc(80, 1.8)); // retorna undefined

// valores retornados
// não é ideal fazer funções usando mais de um tipo de dado, exemplo abaixo, string com boolean.
function terceiraIdade(idade) {
  if (typeof idade !== 'number') {
    return 'Por favor preencha um número';
  } else if (idade >= 60) {
    return 'true';
  } else {
    return 'false';
  }
}

console.log(terceiraIdade(50));

// Escopo, tudo que for criado dentro das chaves eu consigo ver de dentro, mas não de fora.

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises`;
}
console.log(precisoVisitar);

// Escopo lexíco

var profissao = 'desenvolvedor';

function dados() {
  nome = 'João';
  idade = 24;
  function outrosDados() {
    var endereco = 'Ribeirão Preto';
    var rua = 'Avenida Benedito Rodrigues pinheiro';
    return `${nome}, ${idade} anos, ${profissao}, ${endereco}, ${rua}`;
  }
  return outrosDados();
}
console.log(dados());
//outrosDados(); // da erro, pois está dentro de uma função pai, é uma função filho

// Hoisting

imc2(115, 1.81);

function imc2(peso, altura) {
  const imc2 = peso / altura ** 2;
  console.log(imc2);
}

