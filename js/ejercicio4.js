/*
*Ejercicio 4: Verificación de contraseña.
Solicita al usuario ingresar una contraseña utilizando prompt("Ingresa tu contraseña"). Si la contraseña es "secreto123", muestra un mensaje de acceso concedido con alert(). De lo contrario, muestra un mensaje de acceso denegado.
 */
const password = prompt("Ingrese tu contraseña");
if (password === null || password === "") {
  alert(password + " Opcion invalida");
} else {
  if (password === "secreto123") {
    alert("Su contraseña es correcta");
  } else {
    alert("Contraseña es incorrecta,  Ingrese de nuevo la contraseña");
  }
}
