const soma = (a, b) => a + b;
// console.log(soma(2, 5));
// console.log(soma(2, 5));

let saldo = 10000;

const sacar = (valor) => {
  saldo -= valor;
  return saldo;
};

console.log(sacar(100));
console.log(sacar(100));
