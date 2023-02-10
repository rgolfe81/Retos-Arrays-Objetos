// 11. Utiliza el objeto del ejercicio anterior y mediante desestructuración accede
// únicamente a tres de esas propiedades

let person = {
    nombre : "Rubén",
    apellidos : "Golfe Silvestre",
    edad : 41,
    poblacion : "Vilamarxant",
    ciudad : "Valencia",
    pais : "España",
    hobbies : ["Tenis", "TrailRunning"]
}

let {nombre, edad, pais} = person;

console.log (nombre);
console.log (edad);
console.log (pais);