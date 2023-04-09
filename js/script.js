// Variables para el cronómetro
let minutos = 0;
let segundos = 0;
let milisegundos = 0;
let intervalo;

// Obtener elementos del DOM
const minutosSpan = document.getElementById("minutos");
const segundosSpan = document.getElementById("segundos");
const milisegundosSpan = document.getElementById("milisegundos");
const iniciarBoton = document.getElementById("iniciar");
const detenerBoton = document.getElementById("detener");
const reiniciarBoton = document.getElementById("reiniciar");
const parcialBoton = document.getElementById("parcial");
const parcialesLista = document.getElementById("parciales");

// Lista para guardar los tiempos parciales
let parciales = [];

// Función para actualizar el cronómetro
function actualizarCronometro() {
  milisegundos += 10;
  if (milisegundos == 1000) {
    milisegundos = 0;
    segundos++;
    if (segundos == 60) {
      segundos = 0;
      minutos++;
    }
  }
  milisegundosSpan.innerHTML = milisegundos.toString().padStart(3, "0");
  segundosSpan.innerHTML = segundos.toString().padStart(2, "0");
  minutosSpan.innerHTML = minutos.toString().padStart(2, "0");
}

// Función para iniciar el cronómetro
function iniciarCronometro() {
  intervalo = setInterval(actualizarCronometro, 10);
}

// Función para detener el cronómetro
function detenerCronometro() {
  clearInterval(intervalo);
}

// Función para reiniciar el cronómetro
function reiniciarCronometro() {
  clearInterval(intervalo);
  minutos = 0;
  segundos = 0;
  milisegundos = 0;
  milisegundosSpan.innerHTML = "000";
  segundosSpan.innerHTML = "00";
  minutosSpan.innerHTML = "00";
  parciales = [];
  parcialesLista.innerHTML = "";
}

// Función para tomar un tiempo parcial
function tomarParcial() {
  const tiempoParcial = {
    minutos: minutos,
    segundos: segundos,
    milisegundos: milisegundos,
  };
  parciales.push(tiempoParcial);
  const li = document.createElement("li");
  li.innerHTML = `<span>${minutos.toString().padStart(2, "0")}:${segundos
    .toString()
    .padStart(2, "0")}:${milisegundos.toString().padStart(3, "0")}</span>`;
  parcialesLista.appendChild(li);
}

// Agregar eventos a los Botones
iniciarBoton.addEventListener("click", iniciarCronometro);
detenerBoton.addEventListener("click", detenerCronometro);
reiniciarBoton.addEventListener("click", reiniciarCronometro);
parcialBoton.addEventListener("click", tomarParcial);
