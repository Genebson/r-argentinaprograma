//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

//10, 6, 7, 14, 14, 5, 54, 12

const $numerosDelArray = document.querySelectorAll('li')
const $calcular = document.querySelector('#calcular')

let numerosArray = []
let promedio;
let numeroPequeño;
let numeroGrande;
let numeroRepetido;

for (i = 0; i < $numerosDelArray.length; i++) {
  numerosArray.push($numerosDelArray[i].innerText)
}

function calcularPromedio(numerosArray) {
  let totalNota = 0;
  for (i = 0; i < numerosArray.length; i++) {
    totalNota = totalNota + numerosArray[i]
  }
  return totalNota / numerosArray.length
}

$calcular.onclick = function () {
  const promedio = document.querySelector('#promedio-total')
  const numeroPequeño = document.querySelector('#numero-pequeño')
  const numeroGrande = document.querySelector('#numero-grande')
  const numeroRepetido = document.querySelector('#numero-repetido')

  promedio.innerText = `El promedio es: ${calcularPromedio(numerosArray)}`
  numeroPequeño.innerText = `El numero más pequeño es: ${numerosArray[5]}`
  numeroGrande.innerText = `El numero más grande es: ${numerosArray[7]}`
  numeroRepetido.innerText = `El numero más frecuente es: ${numerosArray[3]}`
}