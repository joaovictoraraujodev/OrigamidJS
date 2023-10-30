var pessoa = {
  nome: 'João',
  idade: 24,
  profissao: 'desenvolvedor',
  possuiFaculdade: true,
};
console.log(pessoa);

var quadrado = {
  lados: 4,
  area: function (lados) {
    return lados * lados;
  },
  perimetro: function (lados) {
    return this.lados * lados;
  },
};

console.log(quadrado.lados);
console.log(quadrado.perimetro(5));
console.log(quadrado.area(5));

// forma abreviada

var quadrado = {
  lados: 4,
  area(lados) {
    return lados * lados;
  },
  perimetro(lados) {
    return this.lados * lados;
  },
};

console.log(quadrado.lados);
console.log(quadrado.perimetro(10));
console.log(quadrado.area(10));

// objetos nativos

Math.PI; // vai dar o resultado de pi
Math.random(); // vai dar um número aleatório

var pi = Math.PI
console.log(pi);