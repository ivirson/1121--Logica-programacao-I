// const numbers = [1, 2, 3, 4, 5];
// // const numbersNovo = numbers;
// const numbersNovo = [...numbers];
// console.log(numbers); // [1, 2, 3, 4, 5]
// console.log(numbersNovo); // [1, 2, 3, 4, 5]
// numbersNovo.push(1986);
// console.log(numbers); // [1, 2, 3, 4, 5, 1986]
// console.log(numbersNovo); // [1, 2, 3, 4, 5, 1986]

// const pessoa = {
//   name: "Fulano de Tal",
// };
// const outraPessoa = { ...pessoa };
// console.log(pessoa);
// console.log(outraPessoa);
// outraPessoa.age = 15;
// console.log(pessoa);
// console.log(outraPessoa);

// const numbers = [1, 2, 3];
// const letters = ["a", "b", "c"];
// const combined = [...numbers, ...letters];
// console.log(combined);

// const numbers = [1, 2, 3, 4, 5, 6];
// const [one, two, ...rest] = numbers;
// console.log(one);
// console.log(two);
// console.log(rest);

// const properties = ["name", "age"];
// const values = ["Fulano de Tal", 19];
// let obj = {};
// for (let i = 0; i < properties.length; i++) {
//   obj[properties[i]] = values[i];
// }
// console.log(obj);
// console.log(
//   properties.map((item, i) => {
//     return {
//       [item]: values[i],
//     };
//   })
// );

const aluno = {
  name: "Fulano de Tal",
  age: 15,
  documentNumber: "01234567890",
  adress: {
    street: "Rua A",
    number: 258,
    zipCode: "42800-049",
  },
};

const { name, age, ...rest } = aluno;
console.log(name);
console.log(age);
console.log(rest);
