// function exibirResultado(result) {
//   console.log(result);
// }

// function exibirResultadoFormatado(result) {
//   console.log(`O resultado é: ${result}`);
// }

// function multiplicar(a, b, fn) {
// //   console.log(fn);
//   const result = a * b;
//   fn(result);
// }

// multiplicar(5, 3, exibirResultado);
// multiplicar(5, 3, exibirResultadoFormatado);

const statusLogado = (nome) => {
  return `${nome} logou com sucesso no sistema!`;
};

const usuarioLogin = (nome) => {
  // Efetua o login aqui...
  return statusLogado(nome);
};

const login = usuarioLogin("Ivirson");
console.log(login);
