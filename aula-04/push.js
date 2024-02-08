const numbers = [1, 2, 3];
console.log(numbers.length); // 3
const length = numbers.push(4, 5);
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(length); // 5

const notes = [10, 9];
console.log(numbers.push(notes));
console.log(numbers);
console.log(numbers.push(...notes));
console.log(numbers);
