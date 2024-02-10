let meuArray = [1, 2, 3, 4, 5];
// meuArray.splice(2, 0, 6, 7); // Inserir os elementos 6 e 7 a partir do índice 2
// console.log(meuArray);
// meuArray.splice(2, 2); // Remover 2 elementos a partir do índice 2
// console.log(meuArray);
// meuArray.splice(2, 2, 6, 7, 250); // Remover 2 elementos a partir do índice 2 e inserir os elementos 6 e 7
// console.log(meuArray);
// meuArray.splice(1);
// console.log(meuArray);
// meuArray.splice(0, 0, 5, 8, 9, 45, 36);
// meuArray.unshift(5, 8, 9, 45, 36);
// meuArray.splice(0, meuArray.length, 3, 5, 7);
meuArray.map((num) => ({ age: num }));
console.log(meuArray.map((num) => ({ age: num })));
