const $form = document.querySelector('#formulario-integrantes')
// $form.onsubmit = validarForm;

const $botonIngresar = document.querySelector('#ingresar-integrantes')
const $botonSiguiente = document.querySelector('#siguiente-paso')
const $botonCalcular = document.querySelector('#calcular-integrantes')
const $botonResetear = document.querySelector('#resetear-integrantes')
const $divResultado = document.querySelector('#resultado')
let inputsNombres = 0;
let inputsEdad = 0;

$botonIngresar.onclick = function (e) {
  e.preventDefault()
  mostrarBotonSiguiente()
  nombresDeLosIntegrantes()
  errorIntegrantes()
  return false;
}

$botonSiguiente.onclick = function () {
  ocultarBotonSiguiente()
  mostrarBotonCalcular()
  mostrarBotonResetear()
  edadDeLosIntegrantes()
  errorNombres()
  return false;
}

$botonCalcular.onclick = function (e) {
  e.preventDefault()
  ocultarBotonSiguiente()
  ocultarBotonCalcular()
  mostrarResultado()
  errorEdades()
  const edades = calcularIntegrantes()

  const exito = manejarErrores(errores) === 0;
  if (exito) {
    const $integranteMayor = document.querySelector('#integrante-mayor')
    const $integranteMenor = document.querySelector('#integrante-menor')
    const $promedioIntegrantes = document.querySelector('#promedio-integrantes')

    $integranteMayor.innerText = `El integrante con más edad tiene: ${obtenerNumeroMayor(edades)}`
    $integranteMenor.innerText = `El integrante con menos edad tiene: ${obtenerNumeroMenor(edades)}`
    $promedioIntegrantes.innerText = `El promedio de los integrantes es: ${obtenerPromedioTotal(edades)}`
  }
}

$botonResetear.onclick = function (e) {
  e.preventDefault()

  inputsNombres = 0
  inputsEdad = 0
  resetear()
  return false;
}

function errorIntegrantes() {
  const $form = document.querySelector('#formulario-integrantes')

  const integrantes = $form.integrantes.value
  const errorIntegrantes = validarCantidadIntegrantes(integrantes)
  const errores = {
    integrantes: errorIntegrantes
  }
  manejarErrores(errores)
}

function errorNombres() {
  const errores = {}
  const nombreIntegrantes = document.querySelectorAll('.nombres-integrantes')

  for (let i = 0; i < nombreIntegrantes.length; i++) {
    errores[`campo-${i + 1}`] = validarNombre(nombreIntegrantes[i])
  }
  manejarErrores(errores)
}

function errorEdades() {
  const errores = {}
  const edadesIntegrantes = calcularIntegrantes()

  for (let i = 0; i < edadesIntegrantes.length; i++) {
    errores[`campos-${i + 1}`] = validarEdad(edadesIntegrantes[i])
    console.log(edadesIntegrantes[i]);
  }
  manejarErrores(errores)
  console.log(manejarErrores(errores));
}

function manejarErrores(errores) {
  const keys = Object.keys(errores)
  const $errores = document.querySelector('#errores')
  $errores.innerHTML = ''

  let contadorErrores = 0;
  keys.forEach(function (key) {
    const error = errores[key]

    if (error) {
      contadorErrores++
      $form[key].className = 'error'

      const $error = document.createElement('li')
      $error.innerText = error
      $errores.appendChild($error)
    } else {
      $form[key].className = ''
    }
  });
  return contadorErrores;
}

function nombresDeLosIntegrantes() {
  const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes').value
  const $divIntegrantes = document.querySelector('#integrantes')

  for (let i = inputsNombres; i < $cantidadIntegrantes; i++) {
    if ($cantidadIntegrantes > 0) {
      mostrarBotonSiguiente()
    } else {
      ocultarBotonSiguiente()
    }
    const $div = document.createElement('div')
    $div.className = 'integrante-nombre'

    const $label = document.createElement('label')
    $label.textContent = 'Nombre del integrante ' + (i + 1) + ': '
    const $input = document.createElement('input')
    $input.type = 'text'
    $input.name = `campo-${i + 1}`
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
    $label.textContent = `Ingrese la edad de ${$nombresInput[i].value}: `
    const $input = document.createElement('input')
    $input.type = 'number'
    $input.name = `campos-${i + 1}`
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
  $cantidadIntegrantes.value = ''
  const $errores = document.querySelector('#errores')
  $errores.innerHTML = ''

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