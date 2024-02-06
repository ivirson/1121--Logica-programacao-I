const alunos = [
  { nome: "Carlos", idade: 18 },
  { nome: "Julia", idade: 28 },
  { nome: "Pedro", idade: 19 },
  { nome: "Aline", idade: 25 },
  { nome: "Joana", idade: 32 },
  { nome: "Maisa", idade: 30 },
];

// for (const i in alunos) {
//   console.log(`${alunos[i].nome} tem ${alunos[i].idade} anos`);
// }

// for (let i = 0; i < alunos.length; i++) {
//   console.log(`${alunos[i].nome} tem ${alunos[i].idade} anos`);
// }

const aluno = alunos[0];

// console.log(Object.keys(aluno));

// console.log(aluno.nome);
// console.log(aluno["nome"]);

for (const prop in aluno) {
  console.log(prop, aluno[prop]);
}
