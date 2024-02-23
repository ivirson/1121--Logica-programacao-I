let person;
// console.log(person.name);

const age = 250;

// if (age < 18) {
//   throw new RangeError("Usuário menor de idade");
// }

class CustomError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
    this.message = message;
  }
}

function checaIdade(age) {
  if (age >= 200) {
    throw new CustomError(500, "Ninguem deveria ter essa idade");
  }

  return age;
}

try {
  console.log(checaIdade(300));
} catch (error) {
  if (error.code === 500) {
    console.log("Servidor fora");
  }

  if (error.code === 404) {
    console.log("O recurso solicitado não existe");
  }

  console.log(error instanceof CustomError);
  //   console.log("code:", error.code);
  //   console.log("message:", error.message);
  //   console.log("stack:", error.stack);
} finally {
  console.log("Processo finalizado");
}
