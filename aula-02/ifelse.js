// const age = 1986;

// if (age >= 18) {
//   console.log("Maior de idade");
// } else if (age < 18 && age > 0) {
//   console.log("Menor de idade");
// } else {
//   console.log("Entrada inválida");
// }

const tenhoDinheiro = false;
const diaClaro = true;

if (tenhoDinheiro || diaClaro) {
  console.log("Obaaa!! Vou à praia.");
} else {
  console.log("Deu ruim");
}

tenhoDinheiro || diaClaro
  ? console.log("Obaaa!! Vou à praia.")
  : console.log("Deu ruim");

function qualquer() {
  if (tenhoDinheiro || diaClaro) {
    // somar algo
    // fazer outra coisa
    return true;
  } else {
    return false;
  }
}

function outra() {
  return tenhoDinheiro || diaClaro ? true : false;
}

if (outra()) {
  console.log("Obaaa!! Vou à praia.");
} else {
  console.log("Deu ruim");
}
