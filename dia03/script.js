// Solicitando informação ao usuario e atribuindo os valores as variaveis
let nome = prompt('Digite seu nome: ');
let idade = parseInt(prompt('Digite sua idade: '));
let altura = parseFloat(prompt('Digite sua altura: '));
let peso = parseInt(prompt('Digite seu peso: '));

// Calculando o ano que a pessoa nasceu e o IMC
let anoNascimento = 2023 - idade;

let calcIMC = peso / (altura * altura);

// Exibindo informações no console
console.log(
  `Olá ${nome}, você tem ${idade} anos, nasceu em ${anoNascimento}, tem ${altura} de altura, pesa ${peso}kg seu IMC é ${calcIMC} Kg/m²`
);
