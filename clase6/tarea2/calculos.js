function obtenerSalarioMayor(salarioAnual) {
  let salarioMayor = salarioAnual[0]
  for (let i = 0; i < salarioAnual.length; i++) {
    if (salarioAnual[i] > salarioMayor) {
      salarioMayor = salarioAnual[i]
    }
  }
  return salarioMayor
}

function obtenerSalarioMenor(salarioAnual) {
  let salarioMenor = salarioAnual[0]
  for (let i = 0; i < salarioAnual.length; i++) {
    if (salarioAnual[i] < salarioMenor) {
      salarioMenor = salarioAnual[i]
    }
  }
  return salarioMenor
}

function obtenerPromedio(salarioAnual) {
  let promedio = 0
  for (let i = 0; i < salarioAnual.length; i++) {
    promedio += salarioAnual[i]
  }
  return promedio / salarioAnual.length
}