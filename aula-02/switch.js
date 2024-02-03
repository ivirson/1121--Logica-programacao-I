/*
    Escreva, usando switch case, um código que retorna o dia da semana, por extenso e em pt-BR, de acordo com a data do sistema.
*/
let today = new Date().getDay();
console.log(today);

switch (today) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  case 4:
    console.log("Quinta-feira");
    break;
  case 5:
    console.log("Sexta-feira");
    break;
  case 6:
    console.log("Sábado");
    break;
}

const age = 19;

switch (true) {
  case age > 0 && age <= 2:
    console.log("Bebê");
    break;
  case age > 2 && age < 12:
    console.log("Criança");
    break;

  default:
    break;
}
