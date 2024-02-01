/*
    Crie um algoritmo que, dadas duas variáveis, valide se os seus valores são do number e então retorne a soma entre esses valores. Caso algum dos valores não for um número, faça a conversão deste.
    Se não for possível fazer a conversão, exiba uma mensagem de erro ao usuário.
*/
let a = 15;
let b = "58";

a = Number(a);
b = Number(b);

if (isNaN(a) || isNaN(b)) {
  console.log("Erro");
} else {
  console.log(a + b);
}
