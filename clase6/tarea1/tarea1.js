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
  $botonSiguiente.style.display = 'inline'
  nombresDeLosIntegrantes()
  return false;
}

$botonSiguiente.onclick = function () {
  $botonSiguiente.style.display = 'inline'
  $botonCalcular.style.display = 'inline'
  $botonResetear.style.display = 'inline'
  $botonSiguiente.style.display = 'none'
  edadDeLosIntegrantes()
  return false;
}

$botonCalcular.onclick = function () {
  $botonSiguiente.style.display = 'none'
  $divResultado.classList.remove('oculto')
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
  const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes')
  const $containerFormulario = document.querySelector('#container-datos')
  const padreContainer = $containerFormulario.parentNode
  padreContainer.removeChild($containerFormulario)
  $cantidadIntegrantes.value = "";
  return false;
}

function nombresDeLosIntegrantes() {
  const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes').value
  const $divIntegrantes = document.querySelector('#integrantes')

  for (let i = inputsNombres; i < $cantidadIntegrantes; i++) {
    const $inputNombres = document.createElement('input')
    $divIntegrantes.appendChild(document.createTextNode('Nombre del integrante ' + (i + 1) + ': '))
    $inputNombres.type = 'text'
    $inputNombres.className = 'nombres-integrantes'
    $divIntegrantes.appendChild($inputNombres)
    $divIntegrantes.appendChild(document.createElement('br'))
    inputsNombres++
  }
}

function edadDeLosIntegrantes() {
  const $nombresInput = document.querySelectorAll('.nombres-integrantes')
  const $divEdadIntegrantes = document.querySelector('#edad-integrantes')

  for (let i = inputsEdad; i < $nombresInput.length; i++) {
    const $inputEdades = document.createElement('input')
    $divEdadIntegrantes.appendChild(document.createTextNode('Edad de ' + ($nombresInput[i].value) + ': '))
    $inputEdades.type = 'number'
    $inputEdades.className = 'edad-integrantes'
    $divEdadIntegrantes.appendChild($inputEdades)
    $divEdadIntegrantes.appendChild(document.createElement('br'))
    inputsEdad++
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