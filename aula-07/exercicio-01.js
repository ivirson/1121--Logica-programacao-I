/*
    Escreva uma função para calcular o fatorial de um número.
    Ex: n * (n-1) * (n-2) *...*1
*/

const num = 5;

// function fatorial(num) {
//   if (num === 0) {
//     return 1;
//   }

//   let fatorial = num;

//   for (let i = num - 1; i > 0; i--) {
//     fatorial *= i;
//   }

//   return fatorial;
// }

function fatorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * fatorial(n - 1);
}

console.log(fatorial(num));
