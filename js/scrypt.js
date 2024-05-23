function mensajedeinscripcion() {
  alert("☆ Thanks for subscribing ☆");
}

function mensajeenviado() {
  alert("☆ Message Sent ☆");
}

let name = "Pedro";
let years = 18;
console.log(years + "" + name);

const mayorEdad = 18;
if (mayorEdad >= 18) {
  console.log("Bienvenido");
} else {
  console.log("Access denied");
}

let nota = 10;
if (nota < 4) {
  console.log("Aplazado");
} else if (nota < 7) {
  console.log("Desaprobado");
} else if (nota < 9) {
  console.log("Aprobado");
} else {
  console.log("Sobresaliente");
}
