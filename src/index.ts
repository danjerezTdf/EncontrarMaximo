/*Encontrar el Número Máximo
• Leer valores hasta que se introduzca un cero (0)
• El usuario puede introducir valores positivos y negativos
• Encontrar el máximo de los elementos que se introdujeron
• Analizar cómo cambia el programa para hallar el mínimo*/

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
