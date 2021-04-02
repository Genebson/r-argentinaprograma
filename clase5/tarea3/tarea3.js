//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

let horasParciales;
let minutosParciales;
let segundosParciales;

let horasConvertidas;
let minutosConvertidos;
let segundosConvertidos;

function sumaTotal(tiempoParcial) {
  let counter = 0;
  for (i = 0; i < tiempoParcial.length; i++) {
    counter += Number(tiempoParcial[i].value)
  }
  return counter
}

function excedente(tiempoTotal) {
  let excedente = (tiempoTotal % 60)
  return excedente
}

function convertirNumeros(tiempoTotal) {
  let convertir = parseInt(tiempoTotal / 60)
  return convertir
}

function calcularTotal(excedente, convertidos) {
  let total = excedente + convertidos
  return total
}

function minutosYSegundos() {
  if (segundosConvertidos >= 60) {
    segundosConvertidos -= 60
    minutosConvertidos += 1
  }
  if (minutosConvertidos >= 60) {
    minutosConvertidos -= 60
    horasConvertidas += 1
  }
}

const $cargarDatos = document.querySelector('#cargar-datos');

$cargarDatos.onclick = function () {
  const horasDeLasClases = document.querySelectorAll('.horas')
  const minutosDeLasClases = document.querySelectorAll('.minutos')
  const segundosDeLasClases = document.querySelectorAll('.segundos')

  horasParciales = sumaTotal(horasDeLasClases)
  minutosParciales = sumaTotal(minutosDeLasClases)
  segundosParciales = sumaTotal(segundosDeLasClases)

  horasConvertidas = calcularTotal(horasParciales, convertirNumeros(minutosParciales))
  minutosConvertidos = calcularTotal(excedente(minutosParciales), convertirNumeros(segundosParciales))
  segundosConvertidos = excedente(segundosParciales)

  minutosYSegundos()

  const tiempoTotal = document.querySelector('#tiempo-total')

  tiempoTotal.innerText = `El tiempo total es de: ${horasConvertidas} horas ${minutosConvertidos} minutos y ${segundosConvertidos} segundos.`

}

// $botonCalcularClases.onclick = function () {
//   const horasDelVideo = document.querySelectorAll('.horas');
//   const minutosDelVideo = document.querySelectorAll('.minutos');
//   const segundosDelVideo = document.querySelectorAll('.segundos');

//   segundosTemporales = sumaTotal(segundosDelVideo);
//   minutosTemporales = sumaTotal(minutosDelVideo);
//   horasTemporales = sumaTotal(horasDelVideo);

//   segundosConvertidos = excedente(segundosTemporales);
//   minutosConvertidos = calcularTotal(excedente(minutosTemporales), convertirNumeros(segundosTemporales));
//   horasConvertidas = calcularTotal(horasTemporales, convertirNumeros(minutosTemporales));

//   minutosySegundos()

//   document.querySelector('#tiempo-total').innerText = `El tiempo total es de: ${horasConvertidas} horas ${minutosConvertidos} minutos y ${segundosConvertidos} segundos.`;

//   return false;
// }