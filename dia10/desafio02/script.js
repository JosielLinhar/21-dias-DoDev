let num = parseInt(prompt('Digite um número inteiro e positivo'));
let fibonacci = [];
fibonacci[0] = num - 1;
fibonacci[1] = num;

for (let i = 2; i < 10; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(`Fibonacci: ${fibonacci}`);
