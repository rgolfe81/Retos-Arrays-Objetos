// 1. Dado el array ["A", "B", "C", "D", "E", "F", "G", "H", "I"] crea una función que saque
// por consola la longitud del array. Crea otra función que obtenga un elemento
// aleatorio del array y lo saque por consola.


const LengthArray = (array) => {
    console.log (`La longitud del array es ${array.length}`);
}

const RandomElement = (array) => {
    let element = Math.floor(Math.random()*10);
    if (element >= 0 && element <=8){
        console.log (`El elemento extraido del array es ${array[element]}`);
    }
    else{
        console.log ("El número obtenido no está dentro del rango del array");
    }
}


let arrayGiven = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
LengthArray (arrayGiven);
RandomElement (arrayGiven);
