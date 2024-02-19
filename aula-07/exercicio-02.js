/*
  Seja n o enésimo termo da sequência de Fibonacci, ele é calculado como:
  
  F(n) = F(n-1) + F(n-2)

  Ou seja, cada elemento da sequência é a soma dos dois anteriores, onde:
  
  F(1) = 0
  F(2) = 0, 1

  Crie um script que pede ao usuário um termo qualquer da série de Fibonacci e ele exiba tal termo.

  5
  Ex: 0, 1, 1, 2, 3, 5
*/

const n = 5;

function fibonacci(n) {
  let resultado = [0, 1];

  if (n <= 2) {
    return resultado.slice(0, n).join(", ");
  }

  for (let i = 1; i < n; i++) {
    let soma = resultado[i] + resultado[i - 1];
    resultado.push(soma);
  }

  return resultado.join(", ");
}

console.log(fibonacci(n));
