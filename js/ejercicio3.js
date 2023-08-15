/* 
*Ejercicio 3: Calculadora de edad.
Pide al usuario su edad y el algoritmo debe responder si es mayor de edad o menor de edad;
*/

const age = parseInt(prompt("Ingrese su edad, por favor: "));
if (age === null || age === "") {
  alert(age + " Opcion invalida");
} else {
  if (age >= 18) {
    alert("Es mayor edad");
  } else {
    alert("Es menor de edad");
  }
}
