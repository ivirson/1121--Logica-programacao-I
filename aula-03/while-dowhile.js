const alunos = [
  { nome: "Carlos", idade: 18 },
  { nome: "Julia", idade: 28 },
  { nome: "Pedro", idade: 19 },
  { nome: "Aline", idade: 25 },
  { nome: "Joana", idade: 32 },
  { nome: "Maisa", idade: 30 },
];

// while (true) {
//   console.log("Algo");
// }

let i = 0;
// while (i < alunos.length) {
//   console.log(`${alunos[i].nome} tem ${alunos[i].idade} anos`);
//   i++;
// }

do {
  console.log(`${alunos[i].nome} tem ${alunos[i].idade} anos`);
  i++;
} while (i < alunos.length);
