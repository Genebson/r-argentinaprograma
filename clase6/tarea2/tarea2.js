/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar
el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual,
salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $botonAgregar = document.querySelector('#agregar-sueldo')
const $botonQuitar = document.querySelector('#quitar-sueldo')
const $botonCalcular = document.querySelector('#calcular-salario')
const $botonResetear = document.querySelector('#resetear')

$botonAgregar.onclick = function () {
  agregarInput()
}

$botonQuitar.onclick = function () {
  quitarInput()
}

$botonCalcular.onclick = function () {
  const salarioAnual = calcularSalario()
  mostrarBotonResetear()
  ocultarBotonCalcular()
  crearTextoResultado(salarioAnual)
}

$botonResetear.onclick = function () {
  resetear()
  mostrarBotonCalcular()
}

function agregarInput() {
  const $divSueldos = document.querySelector('#div-sueldos')
  const $crearInput = document.createElement('input')

  const $div = document.createElement('div')
  $div.className = 'sueldos-input'

  $crearInput.type = "number"
  $crearInput.placeholder = 'Ingrese su sueldo'
  $crearInput.className = 'inputs'

  $div.appendChild($crearInput)
  $div.appendChild(document.createElement('br'))
  $divSueldos.appendChild($div)
}

function quitarInput() {
  const $removerInput = document.querySelectorAll('.sueldos-input')
  const ultimoInput = $removerInput.length - 1
  $removerInput[ultimoInput].remove()
}

function crearTextoResultado(salarioAnual) {
  const $divResultado = document.querySelector('#resultado')
  const $p = document.createElement('p')
  $p.className = 'texto-p'
  $p.textContent = `El Salario mayor en la familia es de: ${obtenerSalarioMayor(salarioAnual)} 
    El Salario menor en la familia es de: ${obtenerSalarioMenor(salarioAnual)} 
    El Salario promedio de la familia es de: ${obtenerPromedio(salarioAnual)}`

  $divResultado.appendChild($p)
}

function borrarDatos() {
  const inputSueldos = document.querySelectorAll('.sueldos-input')
  document.querySelector('.texto-p').remove()

  for (let i = 0; i < inputSueldos.length; i++) {
    inputSueldos[i].remove()
  }
}

function calcularSalario() {
  const $salariosInput = document.querySelectorAll('.inputs')
  let salarioArray = []
  for (let i = 0; i < $salariosInput.length; i++) {
    if ($salariosInput[i].value == '') {
      continue
    }
    salarioArray.push(Number($salariosInput[i].value))
  }
  return salarioArray
}

function ocultarBotonCalcular() {
  document.querySelector('#calcular-salario').className = 'btn-cargar oculto'
}

function mostrarBotonCalcular() {
  document.querySelector('#calcular-salario').className = 'btn-cargar'
}

function ocultarBotonResetear() {
  document.querySelector('#resetear').className = 'btn-cargar oculto'
}

function mostrarBotonResetear() {
  document.querySelector('#resetear').className = 'btn-cargar'
}

function resetear() {
  borrarDatos()
  ocultarBotonCalcular()
  ocultarBotonResetear()
}