/**
 * Ejercicio 6: Decisión de beca.
Solicita al usuario datos personales como el nombre la edad y su pais tambien su departamento, el programa debe otorgar becas academicas a personas que solo sean de toronto canada, mayores de 18
 */
const Name = prompt("Ingrese tu nombre");
if (Name === null || Name === "") {
    alert(Name + " Opcion invalida");
  } else{
    const age = parseInt(prompt("Ingrese tu edad, por favor."));
    const country = prompt("Ingrese tu pais natal");
    const departament = prompt("Ingrese tu departamento o Provincia");
    if (age >= 18) {
        if (country === "canada" && departament === "toronto") {

            alert("El señor: " + Name + " Queda inscripto en la beca")
        } else {
            alert("Lo sentimos cumple con la edad, pero las becas son para las personas que viven en Canada en la provincia de Toronto")
        }
    } else {
        alert("Lo sentimos  No cumples con la edad, y para las personas que viven en Canada en Toronto")
    }
        
    }