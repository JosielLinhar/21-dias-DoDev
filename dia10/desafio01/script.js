let num;
let listNum = [];

let qtdNum = parseInt(prompt('Quantos números deseja inserir no array?'));

for (let indice = 0; indice < qtdNum; indice++) {
  num = parseInt(prompt(`Digite o ${indice + 1} número`));
  listNum[indice] = num;
  if (indice == qtdNum - 1) {
    console.log(listNum);
    console.log(listNum.reverse());
  }
}
