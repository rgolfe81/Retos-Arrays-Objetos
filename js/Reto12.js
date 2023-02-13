// 12. Crea un array que contenga al menos tres objetos con las mismas propiedades
// (al menos tres) y distintos valores. Crea una función que saque por consola el valor
// de una de las propiedades para todos los objetos.

let person = [
    {
        nombre: "Rubén",
        apellidos: "Golfe Silvestre",
        edad: 41
    },
    {
        nombre: "David",
        apellidos: "Golfe Silvestre",
        edad: 37
    },
    {
        nombre: "Raquel",
        apellidos: "Golfe Silvestre",
        edad: 35
    }
];

const AgePerson = (array) => { 
    for (let i=0; i<array.length; i++){
        console.log (`Edad: ${array[i].edad}`);
    }
}

AgePerson (person);

