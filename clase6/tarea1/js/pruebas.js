function probarValidarIntegrantes() {
  console.assert(
    validarCantidadIntegrantes('') === 'El campo cantidad de integrantes solo acepta numeros enteros',
    'El numero ingresado no es un entero')
  console.assert(
    validarCantidadIntegrantes('Emilio') === 'El campo cantidad de integrantes solo acepta numeros enteros',
    'El numero ingresado no es un entero')

  console.assert(
    validarCantidadIntegrantes('') === 'El campo integrantes debe tener al menos 1 numero',
    'Validar integrantes no validó que el campo esté vacío')
  console.assert(
    validarCantidadIntegrantes('Emilio') === 'El campo integrantes debe tener al menos 1 numero',
    'Validar integrantes no validó que el campo esté vacío')
}

function probarValidarNombre() {
  console.assert(
    validarNombre('123') === 'El campo nombre solo acepta una letra capital y minusculas',
    'El nombre ingresado no contiene letra capital ni minusculas'
  )
  console.assert(
    validarNombre('Juan') === 'El campo nombre solo acepta una letra capital y minusculas',
    'El nombre ingresado no contiene letra capital ni minusculas'
  )

  console.assert(
    validarNombre('') === 'El campo nombre debe tener al menos 1 caracter',
    'Validar nombre no validó que el campo esté vacío'
  )
  console.assert(
    validarNombre('a') === 'El campo nombre debe tener al menos 1 caracter',
    'Validar nombre no validó que el campo esté vacío'
  )
}

function probarValidarEdad() {
  console.assert(
    validarEdad('1.5') === 'El campo edad de los integrantes solo acepta numeros enteros',
    'El numero ingresado no es un entero'
  )
  console.assert(
    validarEdad('1') === 'El campo edad de los integrantes solo acepta numeros enteros',
    'El numero ingresado no es un entero'
  )

  console.assert(
    validarEdad('') === 'El campo edades debe tener al menos 1 numero',
    'Validar edad no validó que el campo esté vacío'
  )
  console.assert(
    validarEdad('1') === 'El campo edades debe tener al menos 1 numero',
    'Validar edad no validó que el campo esté vacío'
  )
}

probarValidarIntegrantes()
probarValidarNombre()
probarValidarEdad()