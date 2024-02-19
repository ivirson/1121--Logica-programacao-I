---
marp: true
---

# Aula 06 - Funções puras e impuras

- **Puras:** Para um determinado parâmetro recebido, retornam sempre o mesmo resultado.

  > Mesma entrada gera mesma saída

- **Impuras:** Uma função impura é aquela que depende valores externos a ela.

---

# Aula 06 - Funções puras e impuras

```js
const somar = (a, b) => a + b;

let saldo = 2500;

const sacar = (valor) => {
  saldo -= valor;
  return exibirSaldo();
};

const exibirSaldo = () => saldo;

console.log(somar(5, 80));
console.log(sacar(1000));
```

---

# Aula 06 - Funções de alta ordem

## O que são?

Funções de alta ordem são funções que recebem ou retornam uma função.

---

# Aula 06 - Funções de alta ordem

_Função sendo passada como parâmetro de outra função_

```js
function exibirResultado(result) {
  console.log(result);
}

function exibirResultadoFormatado(result) {
  console.log(`O resultado é: ${result}`);
}

function multiplicar(a, b, callback) {
  const result = a * b;
  callback(result);
}

multiplicar(5, 3, exibirResultado);
multiplicar(5, 3, exibirResultadoFormatado);
```

---

# Aula 06 - Funções de alta ordem

_Função como retorno de outra função_

```js
const statusLogado = (nome) => {
  return `${nome} logou com sucesso no sistema!`;
};

const usuarioLogin = (nome) => {
  return statusLogado(nome);
};

const login = usuarioLogin("Ivirson");
console.log(login);
```

---

## Links úteis

- [JavaScript: Introdução e funções de alta ordem](https://rodrigorgs.github.io/aulas/mata56/aula12-js-intro)

- [Funções de alta ordem](https://en.wikipedia.org/wiki/Higher-order_function)

- [Higher Order Functions: o que são?](https://www.alura.com.br/artigos/high-order-functions)

- [Como utilizar as funções ‘Some’ e ‘Every’](https://blog.cod3r.com.br/como-utilizar-as-funcoes-some-e-every/)

- [Funções Puras e Impuras](https://blog.cod3r.com.br/funcoes-puras-e-impuras/)
