function obtenerNumeroMenor(edades) {
  let edadMenor = edades[0]
  for (let i = 0; i < edades.length; i++) {
    if (edades[i] < edadMenor) {
      edadMenor = edades[i]
    }
  }
  return edadMenor;
}

function obtenerNumeroMayor(edades) {
  let edadMayor = edades[0]
  for (let i = 0; i < edades.length; i++) {
    if (edades[i] > edadMayor) {
      edadMayor = edades[i]
    }
  }
  return edadMayor
}

function obtenerPromedioTotal(edades) {
  let totalNota = 0
  for (let i = 0; i < edades.length; i++) {
    totalNota += edades[i]
  }
  return totalNota / edades.length;
}