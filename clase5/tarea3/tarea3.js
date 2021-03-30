//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $botonCalcularClases = document.querySelector('#cargar-datos');

let horasTemporales;
let minutosTemporales;
let segundosTemporales;

let horasConvertidas;
let minutosConvertidos;
let segundosConvertidos;

function sumaTotal(tiempoParcial) {
  let acumulador = 0;
  for (i = 0; i < tiempoParcial.length; i++) {
    acumulador += Number(tiempoParcial[i].value);
  }
  return acumulador;
}

function excedente(tiempoTotal) {
  let excedente = (tiempoTotal % 60);
  return excedente;
}

function convertirNumeros(tiempoTotal) {
  let convertir = parseInt(tiempoTotal / 60)
  return convertir;
}

function calcularTotal(excedente, convertidos) {
  let totales = excedente + convertidos;
  return totales;
}

function minutosySegundos() {
  if (segundosConvertidos >= 60) {
    segundosConvertidos -= 60
    minutosConvertidos += 1
  }
  if (minutosConvertidos >= 60) {
    minutosConvertidos -= 60
    horasConvertidas += 1
  }
}

$botonCalcularClases.onclick = function () {
  const horasDelVideo = document.querySelectorAll('.horas');
  const minutosDelVideo = document.querySelectorAll('.minutos');
  const segundosDelVideo = document.querySelectorAll('.segundos');

  segundosTemporales = sumaTotal(segundosDelVideo);
  minutosTemporales = sumaTotal(minutosDelVideo);
  horasTemporales = sumaTotal(horasDelVideo);

  segundosConvertidos = excedente(segundosTemporales);
  minutosConvertidos = calcularTotal(excedente(minutosTemporales), convertirNumeros(segundosTemporales));
  horasConvertidas = calcularTotal(horasTemporales, convertirNumeros(minutosTemporales));

  minutosySegundos()

  document.querySelector('#tiempo-total').innerText = `El tiempo total es de: ${horasConvertidas} horas ${minutosConvertidos} minutos y ${segundosConvertidos} segundos.`;

  return false;
}