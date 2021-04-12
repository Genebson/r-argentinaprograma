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

$botonIngresar.onclick = function () {
  $botonSiguiente.style.display = 'inline'
  nombresDeLosIntegrantes()
  return false;
}

$botonSiguiente.onclick = function () {
  edadDeLosIntegrantes()
  return false;
}

function nombresDeLosIntegrantes() {
  const cantidadIntegrantes = document.querySelector('#cantidad-integrantes').value
  const divIntegrantes = document.querySelector('#integrantes')

  for (let i = 0; i < cantidadIntegrantes; i++) {
    const inputNombres = document.createElement('input')
    divIntegrantes.appendChild(document.createTextNode('Nombre del integrante ' + (i + 1) + ': '))
    inputNombres.type = 'text'
    inputNombres.className = 'nombres-integrantes'
    inputNombres.name = 'Nombre del Integrante' + i
    divIntegrantes.appendChild(inputNombres)
    divIntegrantes.appendChild(document.createElement('br'))
  }
}

function edadDeLosIntegrantes() {
  const nombresInput = document.querySelectorAll('.nombres-integrantes').value
  const divEdadIntegrantes = document.querySelector('#edad-integrantes')

  for (let i = 0; i < nombresInput; i++) {
    const inputEdades = document.createElement('input')
    divEdadIntegrantes.appendChild(document.createTextNode('Edad del integrante ' + (i + 1) + ': '))
    inputEdades.type = 'number'
    inputEdades.name = `¿Cuál es la edad de ${nombresInput}:` + i
    divEdadIntegrantes.appendChild(inputEdades)
    divEdadIntegrantes.appendChild(document.createElement('br'))
  }
}