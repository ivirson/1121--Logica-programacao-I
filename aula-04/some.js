const numbers = [1, 2, 3, 4, 5];
const even = numbers.some((num) => num % 2 === 0);
console.log(even); // true

const words = ["apple", "banana", "cherry", "date"];
const longEnough = words.some((word) => word.length >= 6);
console.log(longEnough); // true
