---
marp: true
---

# Aula 02

## Coerção de tipos

É o processo de conversão de um valor de um tipo, para outro (como a conversão de uma string para um número, um objeto para um booleano e etc). A coerção de tipos em JavaScript pode ser _Explícita_ ou _Implícita_.

---

### Coerção Explícita

Quando escrevemos, de forma explícita, a coerção que pretendemos fazer.

```js
const num = "15";
const newNum = Number(num);
```

---

### Coerção Implícita

A coerção implícita ocorre quendo atribuímos operadores entre valores de tipos diferentes. Ex: `1 === null`, `2/"5"`.
Para não incorrermos em erros ao usar, sem querer, a coerção implícita, é recomendado usar o _operador restrito de igualdade_ `===`.

---

> É importante salientar que, em JavaScript, só existem apenas 3 tipos de conversão:
>
> - para string
> - para number
> - para boolean

---

## Condicionais

A vida é repleta de momentos de decisão. Em programação não é diferente.
Uma aplicação necessita implementar funcionalidades diferentes, de acordo com as escolhas feitas. Para isso, usamos as declarações condicionais.

---

### If / else

A condicional if é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de else.

```js
if (condicao) {
  codigo para executar caso a condição seja verdadeira
} else {
  senão, executar este código
}
```

---

### Operadores de comparação

- `===` e `!==` — testar se um valor é idêntico ou não idêntico a outro.
- `<` e `>` — teste se um valor é menor ou maior que outro.
- `<=` e `>=` — testar se um valor é menor ou igual a, ou maior que ou igual a outro.

---

### Operadores lógicos: AND, OR e NOT

- `&&` — AND permite encadear duas ou mais expressões para que todas elas tenham que ser avaliadas individualmente como true assim toda a expressão retorna true.
- `||` — OR permite encadear duas ou mais expressões para que uma ou mais delas tenham que ser avaliadas individualmente como true assim toda a expressão retorna true.
- `!` - NOT usado para negar uma expressão.

---

### Operador ternário

```js
if (condition) {
  // run this code
} else {
  // run this code instead
}

if (condition) /* run this code */ else  /* run this code instead */

(condition) ? /* run this code */ : /* run this code instead */
```

---

### Switch

```js
switch (expression) {
  case choice1:
    run this code
    break;

  case choice2:
    run this code instead
    break;

  // include many cases as you like

  default:
    // actually, just run this code
}
```

---

### Operadores de Coalescência nula (??)

Inicialmente, quando se deseja endereçar um valor padrão à variável, um padrão comum é utilizar o operador lógico OR (||). Porém, essa abordagem pode não atender à necessidade se, por exemplo, você desejar tratar um valor falseável (`""`, `0`, `NaN`) como um valor válido.

```js
let user;
// let user = "";
// let user = "João";
let username = user || "Usuário sem nome";
console.log("username ||:", username);
username = user ?? "Usuário sem nome";
console.log("username ??:", username);
```

---

## Links úteis

- [Explicando a coerção de tipos em Javascript](https://medium.com/devzera/explicando-a-coer%C3%A7%C3%A3o-de-tipos-em-javascript-d6c9203c4e5)

- [Tomando decisões no seu código — condicionais](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals)

- [Operador de coalescência nula](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)

- [Entenda o operador de coalescência nula (??) – JavaScript](https://blog.cod3r.com.br/entenda-operador-de-coalescencia-nula-javascript/)

- [Switch true](https://seanbarry.dev/posts/switch-true-pattern)
