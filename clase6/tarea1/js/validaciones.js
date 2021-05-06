function validarCantidadIntegrantes(cantidadIntegrantes) {
  const integrantesRegEx = /^[0-9]*$/

  if (!integrantesRegEx.test(cantidadIntegrantes)) {
    ocultarBotonSiguiente()
    return 'El campo cantidad de integrantes solo acepta numeros enteros'
  }

  if (cantidadIntegrantes.length == 0) {
    ocultarBotonSiguiente()
    return 'El campo integrantes debe tener al menos 1 numero'
  }
  return ''
}

function validarNombre(nombreIntegrantes) {
  const nombreRegEx = /^[a-z]*[A-Z][a-z]*$/

  if (!nombreRegEx.test(nombreIntegrantes)) {
    return 'El campo nombre solo acepta una letra capital y minusculas';
  }

  if (nombreIntegrantes.length == 0) {
    return 'El campo nombre debe tener al menos 1 caracter'
  }
  return ''
}

function validarEdad(edadesIntegrantes) {
  const edadesRegEx = /^[0-9]*$/

  if (!edadesRegEx.test(edadesIntegrantes)) {
    return 'El campo edad de los integrantes solo acepta numeros enteros'
  }

  if (edadesIntegrantes.length == 0) {
    return 'El campo edades debe tener al menos 1 numero'
  }
  return ''
}