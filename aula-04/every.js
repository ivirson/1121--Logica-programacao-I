const numbers = [1, 2, 3, 4, 5];

const checkEven = (num) => num % 2 === 0;
// function checkEven(num) {
//   return num % 2 === 0;
// }

// const even = numbers.every((num) => num % 2 === 0);
const even = numbers.every(checkEven);
console.log(even); // false

const words = ["apple", "banana", "cherry", "date"];
const longEnough = words.every((word) => word.length >= 4);
console.log(longEnough); // true
