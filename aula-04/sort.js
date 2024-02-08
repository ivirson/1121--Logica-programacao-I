const numbers = [3, 1, 4, 10, 5, 9, 2, 6, 5, 3, 5];
console.log(numbers.sort());
console.log(numbers.sort((a, b) => a - b));
// console.log(numbers.sort((a, b) => b - a));

const alunos = ["Zilda", "Pedro", "Tiago", "João", "Amaro", "Álvaro"];
// console.log(alunos.sort((a, b) => a.localeCompare(b)));

const listaDeAlunos = [
  { nome: "João", notas: [8, 7] },
  { nome: "Maria", notas: [9, 8] },
  { nome: "Carlos", notas: [6, 5] },
  { nome: "Ana", notas: [7, 6] },
  { nome: "Pedro", notas: [10, 9] },
  { nome: "Lúcia", notas: [8, 7] },
  { nome: "Fernando", notas: [7, 6] },
  { nome: "Camila", notas: [9, 8] },
  { nome: "Rafael", notas: [6, 5] },
  { nome: "Juliana", notas: [10, 9] },
];
