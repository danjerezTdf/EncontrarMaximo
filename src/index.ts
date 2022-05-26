let numeroIngresado: number = Number(prompt(`ingrese valor`));
let max: number = numeroIngresado;
//let min: number = numeroIngresado;
while (numeroIngresado !== 0) {
  if (numeroIngresado > max) {
    max = numeroIngresado;
  }
  // if (numeroIngresado < min) {
  //   min = numeroIngresado;
  // }
  numeroIngresado = Number(prompt(`Ingreser Siguente Valor:`));
}
console.log(`El Maximo valor ingresado es: ${max}`);
//console.log(`El Menor valor Ingresado es: ${min}`);
