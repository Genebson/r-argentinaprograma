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

function obtenerArray(numerosArray) {
  for (let i = 0; i < $numerosDelArray.length; i++) {
    numerosArray.push(Number($numerosDelArray[i].innerText))
  }
  return numerosArray
}

console.log(obtenerArray(numerosArray));

function calcularPromedio(numerosArray) {
  let totalNota = 0;
  for (let i = 0; i < numerosArray.length; i++) {
    totalNota += numerosArray[i]
  }
  return totalNota / numerosArray.length
}

console.log(calcularPromedio(numerosArray));

function obtenerNumeroPequeño(numerosArray) {
  let numeroMasPequeño = numerosArray[0]
  for (let i = 0; i < numerosArray.length; i++) {
    if (numerosArray[i] < numeroMasPequeño) {
      numeroMasPequeño = numerosArray[i]
    }
  }
  return numeroMasPequeño
}

console.log(obtenerNumeroPequeño(numerosArray));

function obtenerNumeroGrande(numerosArray) {
  let numeroMasGrande = numerosArray[0]
  for (let i = 0; i < numerosArray.length; i++) {
    if (numerosArray[i] > numeroMasGrande) {
      numeroMasGrande = numerosArray[i]
    }
  }
  return numeroMasGrande
}

console.log(obtenerNumeroGrande(numerosArray));

function obtenerNumeroRepetido(numerosArray) {
  let contadorNumeroActual = 0;
  let repeticionesMaximas = 0;
  let numeroMasrepetido;

  for (let i = 0; i < numerosArray.length; i++) {
    for (let j = 0; j < numerosArray.length; j++) {
      if (numerosArray[i] == numerosArray[j]) {
        contadorNumeroActual++
      }
      if (repeticionesMaximas < contadorNumeroActual) {
        repeticionesMaximas = contadorNumeroActual
        numeroMasrepetido = numerosArray[i]
      }
    }
    contadorNumeroActual = 0
  }
  return numeroMasrepetido
}

console.log(obtenerNumeroRepetido(numerosArray));

$calcular.onclick = function () {
  const promedio = document.querySelector('#promedio-total')
  const numeroPequeño = document.querySelector('#numero-pequeño')
  const numeroGrande = document.querySelector('#numero-grande')
  const numeroRepetido = document.querySelector('#numero-repetido')

  promedio.innerText = `El promedio es: ${calcularPromedio(numerosArray)}`
  numeroPequeño.innerText = `El numero más pequeño es: ${obtenerNumeroPequeño(numerosArray)}`
  numeroGrande.innerText = `El numero más grande es: ${obtenerNumeroGrande(numerosArray)}`
  numeroRepetido.innerText = `El numero más frecuente es: ${obtenerNumeroRepetido(numerosArray)}`
}