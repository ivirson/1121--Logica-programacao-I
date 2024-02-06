const alunos = [
  { nome: "Carlos", idade: 18 },
  { nome: "Julia", idade: 28 },
  { nome: "Pedro", idade: 19 },
  { nome: "Aline", idade: 25 },
  { nome: "Joana", idade: 32 },
  { nome: "Maisa", idade: 30 },
];

for (const aluno of alunos) {
  console.log(`${aluno.nome} tem ${aluno.idade} anos`);
}

for (const { nome } of alunos) {
  console.log(`${nome}`);
}
