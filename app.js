const maquinaDisplay = document.querySelector("#maquina");
const usuarioDisplay = document.getElementById("usuario");
const resultadoDisplay = document.getElementById("resultado");
const botonesDisplay = document.querySelectorAll("button");

let maquina;
let usuario;
let resultado;

botonesDisplay.forEach(function (botones) {
  botones.addEventListener("click", function (e) {
    usuario = e.target.id;
    usuarioDisplay.innerHTML = usuario;
    nroAleatorio();
    resultadoFinal();
  });
});

function nroAleatorio() {
  const aleatorio = Math.floor(Math.random() * 3) + 1;
  console.log(aleatorio);

  if (aleatorio === 1) {
    maquina = "piedra";
  }
  if (aleatorio === 2) {
    maquina = "papel";
  }
  if (aleatorio === 3) {
    maquina = "tijera";
  }
  maquinaDisplay.textContent = maquina;
}

function resultadoFinal() {
  if (usuario === maquina) {
    resultado = "Es un empate";
  }
  if (usuario === "piedra" && maquina === "papel") {
    resultado = "Perdiste";
  }
  if (usuario === "piedra" && maquina === "tijera") {
    resultado = "Ganaste";
  }
  if (usuario === "papel" && maquina === "tijera") {
    resultado = "Perdiste";
  }
  if (usuario === "papel" && maquina === "piedra") {
    resultado = "Ganaste";
  }
  if (usuario === "tijera" && maquina === "piedra") {
    resultado = "Perdiste";
  }
  if (usuario === "tijera" && maquina === "papel") {
    resultado = "Ganaste";
  }

  resultadoDisplay.innerHTML = resultado;
}
