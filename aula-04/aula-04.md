---
marp: true
---

Aula 04

### Métodos de Array

Em JavaScript, os arrays têm uma série de métodos disponíveis para manipulação de elementos, como `push()`, `pop()`, `shift()` e muitos outros que veremos adiante. Esses métodos são fornecidos pelo objeto `Array.prototype` e são herdados por todos os objetos array em JavaScript. Isso significa que, ao criar um novo array em JavaScript, todos esses métodos já estão disponíveis para uso imediato, sem a necessidade de definir funções personalizadas ou extensões de objeto.

A seguir vamos ver alguns desses métodos:

---

**push()**

O método `push()` é utilizado para adicionar um ou mais elementos ao final de um array. Ele modifica o array original e retorna o novo tamanho do array após a adição dos elementos.

_Sintaxe_

```js
array.push(valor1[, valor2[, ..., valorN]])

```

---

**Exemplo**

```js
const numbers = [1, 2, 3];
const length = numbers.push(4, 5);
console.log(numbers);
console.log(length);
```

No exemplo acima, `push()` é utilizado para adicionar os números `4` e `5` ao final do array `numbers`. O resultado é a exibição do novo array `[1, 2, 3, 4, 5]` e do novo tamanho do array `5`.

---

**pop()**

O método `pop()` é utilizado para remover o último elemento de um array e retornar esse elemento. Ele modifica o array original.

_Sintaxe_

```js
array.pop();
```

---

**Exemplo**

```js
const stack = [1, 2, 3, 4, 5];
const lastItem = stack.pop();
console.log(stack);
console.log(lastItem);
```

No exemplo acima, `pop()` é utilizado para remover o último elemento do array `stack`. O resultado é a modificação do array original, que passa a conter os elementos `[1, 2, 3, 4]`, e a exibição do valor do último elemento removido, que é `5`.

---

**shift()**

O método `shift()` é utilizado para remover o primeiro elemento de um array e retornar esse elemento. Ele modifica o array original e atualiza os índices dos elementos restantes.

_Sintaxe_

```js
array.shift();
```

---

**Exemplo**

```js
const fruits = ["banana", "apple", "orange", "grape"];
const firstItem = fruits.shift();
console.log(fruits);
console.log(firstItem);
```

No exemplo acima, `shift()` é utilizado para remover o primeiro elemento do array `fruits`. O resultado é a modificação do array original, que passa a conter os elementos `["apple", "orange", "grape"]`, e a exibição do valor do primeiro elemento removido, que é `"banana"`.

---

**unshift()**

O método `unshift()` adiciona os elementos especificados ao início de um array e retorna o novo tamanho do array.

_Sintaxe_

```js
array.unshift();
array.unshift(elemento1);
array.unshift(elemento1, elemento2);
array.unshift(elemento1, elemento2, /* …, */ elementoN);
```

---

**Exemplo**

```js
const fruits = ["banana", "apple"];
const size = fruits.unshift("orange", "grape");
console.log(fruits);
console.log(size);
```

No exemplo acima, `unshift()` é utilizado para adicionar os elementos ao array `fruits`. O resultado é a modificação do array original, que passa a conter os elementos `["orange", "grape", "banana", "apple"]`, e retorna o novo tamanho do array, que é 4.

---

**at()**

o metodo `at()` recebe um valor inteiro e retorna o item referente ao index dele, permitindo valores positivos ou negativos. Valores negativos contam a partir do último item do array.

É utilizado para acessar um elemento específico de um array com base no índice fornecido como argumento. Ele retorna o elemento correspondente ao índice especificado.

---

**Exemplos**

```js
const fruits = ["apple", "banana", "orange", "grape", "mango"];
console.log(fruits.at(1));
console.log(fruits.at(-2));
```

No primeiro exemplo, `at()` retorna o elemento no índice 1 do array `fruits`, que é a string `"banana"`. No segundo exemplo, `at()` retorna o elemento que está duas posições à esquerda do último elemento do array `fruits`, que é a string `"grape"`.

---

**indexOf()**

O método `indexOf()` retorna a primeira posição do elemento buscado, se não encontrar retorna `-1`.

_Sintaxe_

```js
array.indexOf(searchElement);
array.indexOf(searchElement, fromIndex); // fromIndex, por padrão, é definido como '0', a partir do qual iniciará a pesquisa
```

---

**Exemplo**

```js
const fruits = ["banana", "apple", "orange", "grape", "apple"];
console.log(fruits.indexOf("apple"));
console.log(fruits.indexOf("apple", 2));
```

Nos exemplos acima, `fruits.indexOf("apple")` deverá retornar o índice do primeiro elemento encontrado que corresponde ao pesquisado. Quando utilizamos o `fromIndex`, no segundo caso, a busca é iniciada a partir do índice especificado, 2, no caso. Isso faz com que seja retornado o índice do primeiro elemento encontrado que seja posterior ao `fromIndex`, nesse caso, o 4.

---

**lastIndexOf()**

retorna a última posição do elemento , se não encontrar retorna `-1`.

_Sintaxe_

```js
array.lastIndexOf(searchElement);
array.lastIndexOf(searchElement, fromIndex); // fromIndex, por padrão, é definido como '0', a partir do qual iniciará a pesquisa, para trás
```

---

**Exemplo**

```js
const fruits = ["banana", "apple", "orange", "grape", "apple"];
console.log(fruits.lastIndexOf("apple"));
console.log(fruits.lastIndexOf("apple", 2));
```

Nos exemplos acima, `fruits.lastIndexOf("apple")` deverá retornar o índice do último elemento encontrado que corresponde ao pesquisado. Quando utilizamos o `fromIndex`, no segundo caso, a busca é iniciada a partir do índice especificado, 2, no caso, só que no sentido inverso. Isso faz com que seja retornado o índice do último elemento encontrado que seja anterior ao `fromIndex`, nesse caso, o 1.

---

**concat()**

O método `concat()` é utilizado para combinar dois ou mais arrays em um novo array. Ele retorna um novo array que contém os elementos dos arrays originais na ordem em que aparecem.

_Sintaxe_

```js
array.concat(array2, array3, ..., arrayX)
```

---

**Exemplos**

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const newArr = arr1.concat(arr2, arr3);
console.log(newArr);
```

No exemplo acima, `concat()` é utilizado para combinar os arrays `arr1`, `arr2` e `arr3` em um novo array chamado `newArr`. O resultado é um novo array que contém os elementos dos arrays originais na ordem em que aparecem.

---

**every()**

O método `every()` é utilizado para testar se todos os elementos de um array satisfazem a condição implementada pela função fornecida. A função deve retornar um valor booleano que indica se o elemento passou ou não no teste. O método retorna `true` se todos os elementos passarem no teste e `false` caso contrário.

_Sintaxe_

```js
array.every(function(valor[, índice[, array]]) {
    // código a ser executado no elemento
}[, thisArg])

```

---

**Exemplos**

```js
const numbers = [1, 2, 3, 4, 5];
const even = numbers.every((num) => num % 2 === 0);
console.log(even);

const words = ["apple", "banana", "cherry", "date"];
const longEnough = words.every((word) => word.length >= 5);
console.log(longEnough);
```

No primeiro exemplo, `every()` é utilizado para testar se todos os números do array `numbers` são pares. Como o array contém um número ímpar (o número 1), o resultado retornado é `false`. No segundo exemplo, `every()` é utilizado para testar se todas as palavras do array `words` têm pelo menos 5 caracteres. Como todas as palavras atendem a essa condição, o resultado é `true`.

---

**some()**

O método `some()` é utilizado para verificar se ao menos um dos elementos de um array satisfaz a condição implementada pela função fornecida. A função deve retornar um valor booleano que indica se o elemento passou ou não no teste. O método retorna `true` se ao menos um dos elementos passar no teste e `false` caso contrário.

_Sintaxe_

```js
array.some(function(valor[, índice[, array]]) {
    // código a ser executado no elemento
}[, thisArg])
```

---

**Exemplo**

```js
const numbers = [1, 2, 3, 4, 5];
const even = numbers.some((num) => num % 2 === 0);
console.log(even);

const words = ["apple", "banana", "cherry", "date"];
const longEnough = words.some((word) => word.length >= 6);
console.log(longEnough);
```

---

No primeiro exemplo, `some()` é utilizado para verificar se ao menos um dos números do array `numbers` é par. Como o array contém pelo menos um número par (o número 2), o resultado retornado é `true`. No segundo exemplo, `some()` é utilizado para verificar se ao menos uma das palavras do array `words` tem pelo menos 6 caracteres. Como pelo menos uma palavra atende a essa condição (a palavra "banana"), o resultado é `true`.

---

**Outro exemplo**

```js
const ages = [25, 30, 35, 40];
const isAdult = ages.some((age) => age >= 18);
console.log(isAdult);

const minors = [15, 16, 17, 18];
const isAdult2 = minors.some((age) => age >= 18);
console.log(isAdult2);
```

---

No primeiro exemplo, `some()` é utilizado para verificar se ao menos uma das idades no array `ages` é maior ou igual a 18. Como todas as idades atendem a essa condição, o resultado é `true`. No segundo exemplo, `some()` é utilizado para verificar se ao menos uma das idades no array `minors` é maior ou igual a 18. Como a última idade no array atende a essa condição (a idade 18), o resultado é `true`.

---

**filter()**

O método `filter()` é utilizado para criar um novo array contendo todos os elementos que passaram em um teste implementado pela função fornecida. A função `filter()` deve retornar true ou false para cada elemento do array original, e os elementos que retornaram true são incluídos no novo array.

_Sintaxe_

```js
array.filter(function(valor[, índice[, array]]) {
    // código a ser executado no elemento
}[, thisArg])
```

---

**Exemplos**

```js
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

const words = ["apple", "banana", "cherry", "date"];
const longWords = words.filter((word) => word.length >= 6);
console.log(longWords);
```

No primeiro exemplo, `filter()` é utilizado para criar um novo array contendo apenas os números pares do array `numbers`. Como somente os números 2 e 4 são pares, o resultado é um novo array contendo apenas esses dois números. No segundo exemplo, `filter()` é utilizado para criar um novo array contendo apenas as palavras do array `words` que têm pelo menos 6 caracteres. Como somente as palavras "banana" e "cherry" têm pelo menos 6 caracteres, o resultado é um novo array contendo essas duas palavras.

---

**find()**

O método `find()` é utilizado para buscar um elemento específico em um array, com base em uma condição implementada pela função fornecida. A função `find()` deve retornar um valor booleano que indica se o elemento passou ou não no teste. O método retorna o primeiro elemento que passar no teste ou `undefined` caso nenhum elemento passar.

_Sintaxe_

```js
array.find(function(valor[, índice[, array]]) {
    // código a ser executado no elemento
}[, thisArg])

```

---

**Exemplos**

```js
const numbers = [1, 2, 3, 4, 5];
const even = numbers.find((num) => num % 2 === 0);
console.log(even);

const words = ["apple", "banana", "cherry", "date"];
const longEnough = words.find((word) => word.length >= 6);
console.log(longEnough);
```

No primeiro exemplo, `find()` é utilizado para buscar o primeiro número par do array `numbers`. Como o primeiro número par é o número 2, o resultado retornado é `2`. No segundo exemplo, `find()` é utilizado para buscar a primeira palavra do array `words` que tem pelo menos 6 caracteres. Como a primeira palavra com pelo menos 6 caracteres é a palavra "banana", o resultado retornado é `"banana"`.

---

**forEach()**

O método `forEach()` é utilizado para executar uma função fornecida uma vez para cada elemento do array. A função é executada com três argumentos: o valor do elemento atual, o índice do elemento atual e o array em que o método `forEach()` foi chamado.

_Sintaxe_

```js
array.forEach(function(valorAtual[, indice[, array]]) {
    // código a ser executado no elemento
}[, thisArg])
```

---

**Exemplo**

```js
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => console.log(num));
```

No exemplo acima, `forEach()` é utilizado para executar a função `console.log()` para cada elemento do array `numbers`. O resultado é a exibição de cada número no console, um de cada vez.

---

**map()**

O método `map()` é utilizado para criar um novo array preenchido com os resultados da chamada de uma função fornecida em cada elemento no array de chamada. Em outras palavras, ele nos permite aplicar uma função a cada elemento do array original e criar um novo array contendo os resultados dessas operações.

_Sintaxe_

```js
array.map(function(valorAtual[, indice[, array]]) {
    // código a ser executado no elemento
}[, thisArg])
```

---

**Exemplo**

```js
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((num) => num * num);
console.log(squares);
```

No exemplo acima, `map()` é utilizado para criar um novo array `squares` contendo os quadrados de cada elemento do array `numbers`. A função `num => num * num` é aplicada a cada elemento do array original, criando um novo array contendo os resultados dessas operações.

---

**Outro exemplo**

```js
const words = ["apple", "banana", "cherry", "date"];
const upperCaseWords = words.map((word) => word.toUpperCase());
console.log(upperCaseWords);
```

No exemplo acima, `map()` é utilizado para criar um novo array `upperCaseWords` contendo as palavras em letras maiúsculas do array `words`. A função `word => word.toUpperCase()` é aplicada a cada elemento do array original, criando um novo array contendo os resultados dessas operações.

---

**sort()**

O método `sort()` é utilizado para ordenar os elementos de um array em ordem crescente ou decrescente. O método modifica o array original e retorna o array ordenado.

_Sintaxe_

```js
array.sort([compareFunction]);
```

O parâmetro opcional `compareFunction` é uma função que define a ordem de classificação. Se omitido, o array é classificado em ordem de caracteres Unicode.

---

**Exemplo**

```js
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
numbers.sort();
console.log(numbers);
```

No exemplo acima, `sort()` é utilizado para ordenar os elementos do array `numbers` em ordem crescente. O resultado é a exibição dos elementos do array em ordem crescente.

---

**Outro exemplo**

```js
const words = ["apple", "banana", "cherry", "date"];
words.sort();
console.log(words);
```

No exemplo acima, `sort()` é utilizado para ordenar os elementos do array `words` em ordem alfabética. O resultado é a exibição dos elementos do array em ordem alfabética.

---

_Ordenação numérica_

Se você precisar ordenar um array de números em ordem crescente ou decrescente, é necessário passar uma função de comparação como argumento para o método `sort()`. Esta função deve retornar um valor negativo, zero ou positivo dependendo da ordem de classificação desejada.

---

**Exemplo**

```js
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
numbers.sort((a, b) => a - b); // ordem crescente
console.log(numbers);

numbers.sort((a, b) => b - a); // ordem decrescente
console.log(numbers);
```

---

No exemplo acima, `sort()` é utilizado para ordenar os elementos do array `numbers` em ordem crescente e decrescente, respectivamente. A função de comparação `(a, b) => a - b` é utilizada para ordenação em ordem crescente e a função de comparação `(a, b) => b - a` é utilizada para ordenação em ordem decrescente. O resultado é a exibição dos elementos do array em ordem crescente e decrescente, respectivamente.

---

**reduce()**

O método `reduce()` é utilizado para executar uma função callback em cada elemento do array, a fim de reduzir o array a um único valor. A função callback recebe dois parâmetros: um acumulador e o valor atual do elemento. O acumulador é o valor retornado na última invocação da função, ou o valor inicial especificado por um parâmetro opcional. O método `reduce()` executa a função callback uma vez para cada elemento do array, exceto pelo primeiro se nenhum valor inicial for especificado.

_Sintaxe_

```js
array.reduce(function(acumulador, valorAtual, index, array) {
    // código a ser executado no elemento
}[, valorInicial])
```

---

**Exemplo**

```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sum);
```

No exemplo acima, `reduce()` é utilizado para somar todos os elementos do array `numbers`. A função `accumulator + currentValue` é aplicada a cada elemento do array original, criando um único valor que é a soma de todos os elementos do array.

---

**Exemplo com valor inicial**

```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  10
);
console.log(sum);
```

No exemplo acima, `reduce()` é utilizado para somar todos os elementos do array `numbers`, mas começando com um valor inicial de `10`. A função `accumulator + currentValue` é aplicada a cada elemento do array original, criando um único valor que é a soma de todos os elementos do array, mais o valor inicial de `10`.

---

**reverse()**

O método `reverse()` é utilizado para inverter a ordem dos elementos em um array. Ele inverte a ordem dos elementos no lugar e retorna a referência à mesma matriz, ou seja, o primeiro elemento da matriz agora se torna o último, e o último elemento da matriz se torna o primeiro.

---

**Exemplo**

```js
const fruits = ["banana", "apple", "orange", "grape"];
fruits.reverse();
console.log(fruits);
```

No exemplo acima, `reverse()` é utilizado para inverter a ordem dos elementos no array `fruits`. O resultado é a exibição dos elementos do array na ordem inversa à sua posição original.

---

_Observação_

É importante notar que o método `reverse()` modifica a ordem dos elementos no array original. Se você precisar manter a ordem original do array, é necessário criar uma cópia do array antes de aplicar o método `reverse()`.

---

**includes()**

O método `includes()` determina se um array inclui um determinado valor entre suas entradas, retornando `true` ou `false`, conforme apropriado.

_Sintaxe_

```js
array.includes(searchElement);
array.includes(searchElement, fromIndex);
```

---

**Exemplo**

```js
const fruits = ["banana", "apple", "orange", "grape", "apple"];
console.log(fruits.includes("orange"));
console.log(fruits.includes("pineapple"));
console.log(fruits.includes("apple", 2));
console.log(fruits.includes("orange", 3));
```

---

**splice()**

O método `splice()` modifica o conteúdo da array, removendo ou substituindo elementos e/ou adicionando novos elementos.

_Sintaxe_

```js
array.splice(start);
array.splice(start, deleteCount);
array.splice(start, deleteCount, item1);
array.splice(start, deleteCount, item1, item2);
array.splice(start, deleteCount, item1, item2, /* …, */ itemN);
```

---

**Exemplo - Inserir elementos**

```js
let meuArray = [1, 2, 3, 4, 5];
meuArray.splice(2, 0, 6, 7); // Inserir os elementos 6 e 7 a partir do índice 2
console.log(meuArray);
```

---

**Exemplo - Remover elementos**

```js
let meuArray = [1, 2, 3, 4, 5];
meuArray.splice(2, 2); // Remover 2 elementos a partir do índice 2
console.log(meuArray);
```

---

**Exemplo - Substituir elemento**

```js
let meuArray = [1, 2, 3, 4, 5];
meuArray.splice(2, 2, 6, 7); // Remover 2 elementos a partir do índice 2 e inserir os elementos 6 e 7
console.log(meuArray);
```

---

**fill()**

O método `fill()` altera todos os elementos dentro de um intervalo de índices em uma matriz para um valor estático. Ele retorna o array modificado.

_Sintaxe_

```js
array.fill(value);
array.fill(value, start);
array.fill(value, start, end);
```

---

**Exemplo**

```js
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.fill(0, 3, 5));
console.log(numbers.fill(9, 2));
console.log(numbers.fill(8));
```

---

## Matrizes

Array de arrays ou array bidimensional

```js
const matriz = [
  [1, 3, 5],
  [2, 4, 7],
  [6, 9, 0],
];
```

---

## Spread Operator

O operador spread nos permite copiar rapidamente todo ou parte de um array ou objeto existente para outro array ou objeto.

**Exemplo - Spread para combinar arrays**

```js
const numbers = [1, 2, 3];
const letters = ["a", "b", "c"];
const combined = [...numbers, ...letters];
console.log(combined);
```

---

**Exemplo - Spread combinado com a desestruturação**

```js
const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;
console.log(one);
console.log(two);
console.log(rest);
```

---

## Links úteis

- [MDN Web Docs: Array](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)

- [Spread Operator - W3 Schools](https://www.w3schools.com/react/react_es6_spread.asp)

- [Spread Operator - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

- [Protótipos de objetos](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Object_prototypes)
