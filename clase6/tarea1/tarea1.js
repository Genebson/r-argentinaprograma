/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad,
la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente,
borrando los inputs ya creados (investigar cómo en MDN).
*/

const $botonIngresar = document.querySelector('#ingresar-integrantes')
const $botonSiguiente = document.querySelector('#siguiente-paso')
const $botonCalcular = document.querySelector('#calcular-integrantes')
const $botonResetear = document.querySelector('#resetear-integrantes')
const $divResultado = document.querySelector('#resultado')
let inputsNombres = 0;
let inputsEdad = 0;

$botonIngresar.onclick = function () {
  mostrarBotonSiguiente()
  nombresDeLosIntegrantes()
  return false;
}

$botonSiguiente.onclick = function () {
  ocultarBotonSiguiente()
  mostrarBotonCalcular()
  mostrarBotonResetear()
  edadDeLosIntegrantes()
  return false;
}

$botonCalcular.onclick = function () {
  ocultarBotonSiguiente()
  ocultarBotonCalcular()
  mostrarResultado()
  const edades = calcularIntegrantes()

  const $integranteMayor = document.querySelector('#integrante-mayor')
  const $integranteMenor = document.querySelector('#integrante-menor')
  const $promedioIntegrantes = document.querySelector('#promedio-integrantes')

  $integranteMayor.innerText = `El integrante con más edad tiene: ${obtenerNumeroMayor(edades)}`
  $integranteMenor.innerText = `El integrante con menos edad tiene: ${obtenerNumeroMenor(edades)}`
  $promedioIntegrantes.innerText = `El promedio de los integrantes es: ${obtenerPromedioTotal(edades)}`

  return false;
}

$botonResetear.onclick = function () {
  resetear()
  return false;
}

function nombresDeLosIntegrantes() {
  const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes').value
  const $divIntegrantes = document.querySelector('#integrantes')

  for (let i = inputsNombres; i < $cantidadIntegrantes; i++) {
    const $div = document.createElement('div')
    $div.className = 'integrante-nombre'

    const $label = document.createElement('label')
    $label.textContent = 'Nombre del integrante ' + (i + 1) + ': '
    const $input = document.createElement('input')
    $input.type = 'text'
    $input.className = 'nombres-integrantes'

    $div.appendChild($label)
    $div.appendChild($input)
    $div.appendChild(document.createElement('br'))
    $divIntegrantes.appendChild($div)
    inputsNombres++
  }
}

function edadDeLosIntegrantes() {
  const $nombresInput = document.querySelectorAll('.nombres-integrantes')
  const $divEdadIntegrantes = document.querySelector('#edad-integrantes')

  for (let i = inputsEdad; i < $nombresInput.length; i++) {
    const $div = document.createElement('div')
    $div.className = 'integrante-edad'

    const $label = document.createElement('label')
    $label.textContent = `Ingrese la edad de ${$nombresInput[i].value.charAt(0).toUpperCase()}${$nombresInput[i].value.slice(1).toLowerCase()} :`
    const $input = document.createElement('input')
    $input.type = 'number'
    $input.className = 'edad-integrantes'

    $div.appendChild($label)
    $div.appendChild($input)
    $div.appendChild(document.createElement('br'))
    $divEdadIntegrantes.appendChild($div)
    inputsEdad++
  }
}

function borrarDatos() {
  const $nombresDeLosIntegrantes = document.querySelectorAll('.integrante-nombre')
  const $edadesDeLosIntegrantes = document.querySelectorAll('.integrante-edad')
  const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes')
  $cantidadIntegrantes.value.remove()

  for (let i = 0; i < $nombresDeLosIntegrantes.length; i++) {
    $nombresDeLosIntegrantes[i].remove()
  }
  for (let i = 0; i < $edadesDeLosIntegrantes.length; i++) {
    $edadesDeLosIntegrantes[i].remove()
  }
}

function calcularIntegrantes() {
  const $edadesInput = document.querySelectorAll('.edad-integrantes')
  let edadesArr = []
  for (let i = 0; i < $edadesInput.length; i++) {
    edadesArr.push(Number($edadesInput[i].value))
  }
  return edadesArr
}

function ocultarBotonCalcular() {
  document.querySelector('#calcular-integrantes').className = 'btn-cargar oculto'
}

function mostrarBotonCalcular() {
  document.querySelector('#calcular-integrantes').className = 'btn-cargar'
}

function ocultarBotonSiguiente() {
  document.querySelector('#siguiente-paso').className = 'oculto'
}

function mostrarBotonSiguiente() {
  document.querySelector('#siguiente-paso').className = 'btn-cargar'
}

function ocultarResultado() {
  document.querySelector('#resultado').className = 'oculto'
}

function mostrarResultado() {
  document.querySelector('#resultado').className = ''
}

function ocultarBotonResetear() {
  document.querySelector('#resetear-integrantes').className = 'btn-cargar oculto'
}

function mostrarBotonResetear() {
  document.querySelector('#resetear-integrantes').className = 'btn-cargar'
}

function resetear() {
  borrarDatos()
  ocultarBotonCalcular()
  ocultarResultado()
  ocultarBotonResetear()
}