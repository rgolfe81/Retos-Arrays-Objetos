// 10. Crea un objeto que almacene los datos de una persona (nombre, apellidos,
//     edad, dirección, ciudad, país... y lo que quieras). Crea una función que saque por
//     consola el nombre completo (nombre y apellidos) de la persona a modo de string.

let person = {
    nombre : "Rubén",
    apellidos : "Golfe Silvestre",
    edad : 41,
    poblacion : "Vilamarxant",
    ciudad : "Valencia",
    pais : "España",
    hobbies : ["Tenis", "TrailRunning"]
}

const PersonView = (object) => {
    console.log (`Nombre : ${object.nombre}`);
    console.log (`Apellidos : ${object.apellidos}`);
}

PersonView (person);