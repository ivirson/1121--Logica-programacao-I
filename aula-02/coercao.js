// Para Number
let num = "154e53";
// console.log(typeof num);

const newNum = Number(num);
// console.log(newNum); // NaN
// console.log(typeof newNum);

const newNum3 = parseInt(num);
// console.log(newNum3); // 154?
// console.log(typeof newNum3);

const newNum5 = +num;
// console.log(newNum5); // NaN
// console.log(typeof newNum5);

// const newNum2 = parseFloat(num);
// console.log(typeof newNum2);

// const newNum4 = Math.floor(num);
// console.log(typeof newNum4);

// Para String
const lightSpeed = 3e5; // 0 e "" truthy e falsy
// console.log(lightSpeed);
// console.log(lightSpeed?.toString());
// console.log("" + lightSpeed);
// console.log(JSON.stringify(lightSpeed));

// console.log(lightSpeed || "or");
// console.log(lightSpeed ?? "coalescencia");
const obj = { a: 1, b: 2 };
// console.log(obj.toString()); // [object Object]
// console.log(JSON.stringify(obj));

const bol = false;
// console.log(bol.toString());

// Para Boolean
num = "";
console.log(!!num);
