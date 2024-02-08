const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((num) => num * num);
// console.log(squares);

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

const newArray = listaDeAlunos.map(({ nome, notas }) => {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  const media = soma / notas.length;

  return { nome, media };
});

console.log(newArray);
