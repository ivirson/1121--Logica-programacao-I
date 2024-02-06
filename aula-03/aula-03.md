---
marp: true
---

# Aula 03

## Vetores ou arrays

O objeto Array do JavaScript é um **objeto** global usado na construção de 'arrays' (vetores): objetos de alto nível semelhantes a listas.

```js
const frutas = ["maçã", "banana", "abacaxi"];
```

---

## Matrizes

```js
const matriz = [
  [1, 3, 5],
  [2, 4, 7],
  [6, 9, 0],
];
```

---

## Laços de repetição

### For

A instrução for cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência de declarações executadas em sequência.

```js
for(inicialização ; condição de parada ; passos){
    código a ser executado na repetição
}
```

---

### For In

O laço `for...in` interage sobre propriedades enumeradas de um objeto, na ordem original de inserção. O laço pode ser executado para cada propriedade distinta do objeto. Uma propriedade diferente do objeto é atribuida em cada iteração.

```js
for(let variavel in objeto){
    código a ser executado na repetição
}
```

---

### For Of

O loop `for...of` percorre objetos iterativos (incluindo Array, Map, Set, objeto), chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto. A cada iteração, um valor de uma propriedade diferente é atribuido à variável.

```js
for(let variavel of objeto){
    código a ser executado na repetição
}
```

---

### While

A declaração while cria um laço que executa uma rotina especifica enquanto a condição de teste for avaliada como verdadeira. A condição é avaliada antes da execução da rotina.

```js
while(condicão de parada){
    código a ser executado na repetição
}
```

---

### While

Pode funcionar como for

```js
inicializacao
while(condicao de parada){
    código a ser executado na repetição
    passos
}
```

---

### Do-while

A instrução `do...while` cria um loop que executa uma instrução especificada até que a condição de teste seja avaliada como falsa. A condição é avaliada após a execução da instrução, resultando na execução da instrução especificada pelo menos uma vez.

```js
do {
    código a ser executado na repetição
} while (condição de parada)
```

---

## Referencias

- [Array](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)

- [Javascript Array: aprenda o que é como criar e usar!](https://blog.betrybe.com/javascript/javascript-array/)

- [Array.at()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)

- [For](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for)

- [For in](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in)

- [For of](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of)

- [while](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while)

- [do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)

- [Laços - Freecodecamp](https://www.freecodecamp.org/portuguese/news/lacos-em-javascript-explicados-lacos-for-while-do-while-e-mais/)

- [Laços - Woliveiras](https://woliveiras.com.br/posts/la%C3%A7os-de-repeti%C3%A7%C3%A3o-for-for-in-for-of/)
