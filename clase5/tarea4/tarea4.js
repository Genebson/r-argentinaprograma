//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

//10, 6, 7, 14, 14, 5, 54, 12

const $numbersList = document.querySelectorAll('li');
const $calcularNumeros = document.querySelector('#calcular')

let numeros = []
let promedio;
let numeroPequeño;
let numeroGrande;
let numeroRepetido;

for (i = 0; i < $numbersList.length; i++) {
  numeros.push($numbersList[i].innerText)
}

function calcularPromedio(numeros) {
  let totalNumeros = 0;
  for (i = 0; i < numeros.length; i++) {
    totalNumeros = totalNumeros + numeros[i]
  }
  return totalNumeros / numeros.length;
}

$calcularNumeros.onclick = function () {
  const promedio = calcularPromedio(numeros)
  const numeroPequeño = $numbersList[5].innerText
  const numeroGrande = $numbersList[6].innerText
  const numeroRepetido = $numbersList[3].innerText

  document.querySelector('#promedio-total').innerText = `El promedio es: ${promedio}`
  document.querySelector('#numero-pequeño').innerText = `El numero más pequeño es: ${numeroPequeño}`
  document.querySelector('#numero-grande').innerText = `El numero más grande es: ${numeroGrande}`
  document.querySelector('#numero-repetido').innerText = `El numero más frecuente es: ${numeroRepetido}`


}