let nomeAluno = [];
let notaAluno = [];

let continuar = true;
let contador = 0;
let somaNotas = 0;
let mediaTurma = 0;

do {
  let aluno = prompt('Digite o nome do aluno');
  let nota = parseInt(prompt('Digite a nota do aluno'));

  nomeAluno[contador] = aluno;
  notaAluno[contador] = nota;

  somaNotas += notaAluno[contador];
  mediaTurma = somaNotas / nomeAluno.length;
  contador++;

  let encerrar = prompt('Deseja inserir um novo aluno?');
  if (encerrar != 'sim') {
    continuar = false;
  }
} while (continuar);

for (let i = 0; i < nomeAluno.length; i++) {
  console.log(`Aluno: ${nomeAluno[i]}, Nota: ${notaAluno[i]}`);
}

console.log(`Soma das notas: ${somaNotas}`);
console.log(`A média geral da turma: ${mediaTurma}`);
