// declarando arrays
let arrayA = [13, 20, 10, 22, 24, 20, 27, 17, 19, 14];
let arrayB = [24, 22, 23, 11, 15, 17, 29, 14, 16, 21];

// função com os parâmetros pedidos
function numerosIguais(arr1, arr2) {
  let resultado = [];
  let contador = 0;

  // percorre arr1
  for (let i = 0; i < arr1.length; i++) {
    //percorre arr2, para cada número de arr1 ele compara com todos os númeors de arr2
    for (let j = 0; j < arr2.length; j++) {
      // se for bem sucedido ele adiciona o esse número no array de números em comum e atribui o valor máximo ao contador j
      if (arr1[i] == arr2[j]) {
        resultado[contador] = arr1[i];
        contador++;
        j = arr2.length;
      }
    }
  }
  return resultado;
}

console.log(numerosIguais(arrayA, arrayB));
