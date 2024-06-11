// criando variáveis
let nome = prompt('Digite seu nome:');
let idade = parseInt(prompt('Digite sua idade:'));
let peso = parseInt(prompt('Digite seu peso:'));
let altura = parseFloat(prompt('Digite sua altura'));
let profissao = prompt('Digite sua profissão:');

console.log(
  `Olá ${nome}, você tem ${idade} anos, é ${profissao}, tem ${altura}M de altura e pesa ${peso}kg.`
);

// Verifica idade
if (idade >= 18) {
  console.log('Está liberado para tomar umas geladas.');
} else {
  console.log('Sem gelada para você');
}

// descobre idade em dias, semanas e meses
let dias = idade * 365;
let semanas = idade * 52;
let meses = idade * 12;

console.log(`Sua idade em dias é: ${dias}`);
console.log(`Sua idade em semanas é: ${semanas}`);
console.log(`Sua idade em meses é: ${meses}`);

// calculando IMC
let calcIMC = peso / (altura * altura);

console.log(`Seu IMC é ${calcIMC}kg/m²`);

if (calcIMC < 18.5) {
  console.log('Faixa de IMC / Magreza');
} else if (calcIMC >= 18.5 && calcIMC <= 24.9) {
  console.log('Faixa de IMC / Normal');
} else if (calcIMC >= 25 && calcIMC <= 30) {
  console.log('Faixa de IMC / Sobrepeso');
} else {
  console.log('Faixa de IMC / Obesidade');
}

// desobre ano de nascimento

let anoNascimento = 2023 - idade;

console.log(`Você nasceu em ${anoNascimento}`);

//Exibe todos os anos que o usuário já viveu até o ano atual
for (let contador = 0; contador <= idade; contador++) {
  console.log(`${anoNascimento} - ${contador} ano(s) de idade`);
  anoNascimento++;
}
