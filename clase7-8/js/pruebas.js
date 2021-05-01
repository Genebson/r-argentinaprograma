function probarValidarNombre() {
  console.assert(
    validarNombre('') === 'El campo nombre solo acepta una letra capital y minusculas', 'El nombre ingresado no contiene una letra capital'
  );
  console.assert(
    validarNombre('Carlos') === 'El campo nombre solo acepta una letra capital y minusculas', 'El nombre ingresado no contiene una letra capital'
  );

  console.assert(
    validarNombre('a') === 'Este campo debe tener al menos 1 caracter',
    'Validar nombre no validó que el nombre sea vacío'
  )
  console.assert(
    validarNombre('') === 'Este campo debe tener al menos 1 caracter',
    'Validar nombre no validó que el nombre sea vacío'
  )

  console.assert(
    validarNombre('') === 'Este campo debe tener menos de 50 caracteres',
    'Validar nombre no validó que el nombre sea menor a 50 caracteres'
  )
  console.assert(
    validarNombre(
      'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd') === 'Este campo debe tener menos de 50 caracteres',
    'Validar nombre no validó que el nombre sea menor a 50 caracteres'
  )
}

function probarValidarCiudad() {
  console.assert(
    validarCiudad('Buenos Aires') === '',
    'Validar ciudad no funcionó con un nombre de ciudad valido'
  )
  console.assert(
    validarCiudad('') === 'El campo ciudad no puede estar vacío',
    'Validar ciudad no mostró un error cuando la ciudad está vacía'
  )
}

function probarValidarRegalo() {
  console.assert(
    validarDescripcionRegalo('') === 'La descripción del regalo está vacía',
    'Validar descripción del regalo no validó que el campo esté vacío'
  )
  console.assert(
    validarDescripcionRegalo('abc') === '',
    'La funcion validar descripcion regalo no funcionó con una descripción correcta'
  )

  console.assert(
    validarDescripcionRegalo('') === 'Este campo debe tener menos de 200 caracteres',
    'Validar descripcion del regalo no validó que el campo sea menor a 200 caracteres'
  )
  console.assert(
    validarDescripcionRegalo(
      'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd') === '',
    'Validar descripcion del regalo no validó que el campo sea menor a 200 caracteres'
  )
}
probarValidarNombre()
probarValidarCiudad()
probarValidarRegalo()