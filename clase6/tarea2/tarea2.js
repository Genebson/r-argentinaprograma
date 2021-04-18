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

$botonAgregar.onclick = function () {
  agregarInput()
}

$botonQuitar.onclick = function () {
  quitarInput()
}

$botonCalcular.onclick = function () {
  const salarioAnual = calcularSalario()
  crearTextoResultado(salarioAnual)
}

function agregarInput() {
  const $divSueldos = document.querySelector('#div-sueldos')
  const $crearInput = document.createElement('input')
  $crearInput.type = "number"
  $crearInput.placeholder = 'Ingrese su sueldo'
  $crearInput.className = 'inputs'
  $divSueldos.appendChild($crearInput)
  $divSueldos.appendChild(document.createElement('br'))
}

function quitarInput() {
  const $removerInput = document.querySelectorAll('.inputs')
  for (let i = 0; i < $removerInput.length; i++) {
    $removerInput[i].remove()
  }
}

function crearTextoResultado(salarioAnual) {
  const $p = document.querySelector('#texto-resultado')
  $p.appendChild(document.createTextNode(
    `El Salario mayor en la familia es de: ${obtenerSalarioMayor(salarioAnual)} 
    El Salario menor en la familia es de: ${obtenerSalarioMenor(salarioAnual)} 
    El Salario promedio de la familia es de: ${obtenerPromedio(salarioAnual)}`))

}

function calcularSalario() {
  const $salariosInput = document.querySelectorAll('.inputs')
  let salarioArray = []
  for (let i = 0; i < $salariosInput.length; i++) {
    salarioArray.push(Number($salariosInput[i].value))
  }
  return salarioArray
}