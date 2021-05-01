const $form = document.querySelector('#carta-a-santa');
$form.onsubmit = validarForm;

function validarForm(e) {
  e.preventDefault();

  const $form = document.querySelector('#carta-a-santa');

  const nombre = $form.nombre.value;
  const ciudad = $form.ciudad.value;
  const descripcionRegalo = $form['descripcion-regalo'].value;

  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarCiudad(ciudad);
  const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

  const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    'descripcion-regalo': errorDescripcionRegalo
  }

  const exito = manejarErrores(errores) === 0

  if (exito) {
    document.querySelector('#exito').className = '';
    $form.className = 'oculto'
    setTimeout(function () {
      window.location.href = 'wishlist.html'
    }, 5000)
  }
}

function validarNombre(nombre) {
  const nombreRegEx = /^[a-z]*[A-Z][a-z]*$/

  if (!nombreRegEx.test(nombre)) {
    return 'El campo nombre solo acepta una letra capital y minusculas';
  }

  if (nombre.length === 0) {
    return 'Este campo debe tener al menos 1 caracter';
  }

  if (nombre.length >= 50) {
    return 'Este campo debe tener menos de 50 caracteres';
  }
  return '';
}

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return 'El campo ciudad no puede estar vacío';
  }
  return '';
}

function validarDescripcionRegalo(descripcionRegalo) {
  const descripcionRegaloRegEx = /^[a-z0-9]+$/i

  if (!descripcionRegaloRegEx.test(descripcionRegalo)) {
    return 'El campo descripción solo puede tener numeros y letras';
  }
  if (descripcionRegalo.length === 0) {
    return 'La descripción del regalo está vacía';
  }
  if (descripcionRegalo.length >= 200) {
    return 'Este campo debe tener menos de 200 caracteres';
  }
  return ''
}

function manejarErrores(errores) {

  const keys = Object.keys(errores)
  const $errores = document.querySelector('#errores')
  $errores.innerHTML = ''
  let cantidadErrores = 0;


  keys.forEach(function (key) {
    const error = errores[key];
    if (error) {
      cantidadErrores++
      $form[key].className = 'error'

      const $error = document.createElement('li')
      $error.innerText = error
      $errores.appendChild($error)
    } else {
      $form[key].className = ''
    }
  })
  return cantidadErrores
}