// function contagemRegressiva(n) {
//   while (n >= 0) {
//     if (n === 0) {
//       console.log("Booom!!");
//     } else {
//       console.log(n);
//     }
//     n--;
//   }
// }

contagemRegressiva(5);

function contagemRegressiva(n) {
  if (n === 0) {
    console.log("Booom!!");
  } else {
    console.log(n);
    contagemRegressiva(n - 1);
  }
}
