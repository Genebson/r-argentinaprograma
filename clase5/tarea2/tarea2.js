//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del 
// usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!
// Ejemplo form:
//   <form id="entrada-bar" onsubmit="return false;">
//     <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
//     <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
//     <input type="submit" value="Ingresar" id="ingresar"/>
//   </form>
//   <div id="resultado">Hola</div>

const $botonIngresar = document.querySelector('#ingresar-datos');

$botonIngresar.onclick = function () {
  const nombreDelUsuario = document.querySelector('#nombre-usuario').value;
  const segundoNombreDelUsuario = document.querySelector('#segundo-nombre-usuario').value;
  const apellidoDelUsuario = document.querySelector('#apellido-usuario').value
  const edadDelUsuario = document.querySelector('#edad-usuario').value

  let nombreCompleto = `${nombreDelUsuario} ${segundoNombreDelUsuario} ${apellidoDelUsuario}`

  const h1Element = document.querySelector('h1');
  h1Element.innerText = `¡Bienvenido, ${nombreDelUsuario}`

  const divResultado = document.querySelector('#resultado');
  divResultado.innerText = `Tu nombre es ${nombreCompleto} y tenes ${edadDelUsuario}`
}