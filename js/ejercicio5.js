/**
 * Ejercicio 5: Mensajes personalizados.
Crea una función llamada mostrarMensaje que tome un parámetro nombre. Dentro de la función, utiliza alert() para mostrar: "¡Hola, [nombre]! Espero que estés disfrutando de JavaScript." Pide al usuario su nombre utilizando prompt() y llama a la función.
(onclick)
 */

function mostrarMensaje(params) {
    const name = prompt("Ingrese tu nombre,por favor ");
    if (name !== null  & name !== "") {
        alert ("¡Hola, " + name + " !" + " Espero que estes disfrutando de JavaScript.")
        
    } else {
        alert ("¡Hola, Usuario sin nombre! Espero que estes disfrutando de JavaScript.")
        
    }
         
}