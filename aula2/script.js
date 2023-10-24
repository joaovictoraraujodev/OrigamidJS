var nome = 'João '
var sobrenome = 'Araújo '
var nomeCompleto = nome + sobrenome;


var gols = 1000;
var frase = nomeCompleto + 'fez ' + gols + ' gols';
var fraseTemplate = `João fez ${gols}, gols`;
console.log(fraseTemplate);