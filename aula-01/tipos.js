let num = 18; // num é um número
let result = num + "2"; // o JavaScript coage num para string, que pode, então, ser concatenada com o "2"
// console.log(result); // 182

// Number
let age = 25;
// console.log(typeof age); // number
let weight = 92.58;
// console.log(typeof weight); // number

// BigInt
const lightSpeed = 300000n;
// console.log(typeof lightSpeed); // bigint

// Undefined
let pet;
// console.log(pet); // undefined
// console.log(typeof pet); // undefined
pet = "Spike";
// console.log(pet); // Spike
// console.log(typeof pet); // string

// Null
let lastName = null;
// console.log(lastName); // null
// console.log(typeof lastName); // null?

//  Symbol
const s1 = Symbol("foo");
const s2 = Symbol("foo");
// console.log(typeof s1); // symbol
// console.log(typeof s2); // symbol
// console.log(s1 === s2); // false
// console.log(s1); // Symbol(foo)
// console.log(s2); // Symbol(foo)

// object
const person = {
  name: "Ivirson",
  age: 25,
  greeting: () => {
    return "Olá";
  },
};
console.log(person);
console.log(person.name);
person.name = "Ivirson Daltro";
console.log(person.name);
