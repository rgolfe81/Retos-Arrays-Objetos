// 3. Dado el array javascript1 = ["DOM", "BOM", "Funciones", "Arrays"], elimina
// "DOM" del array. Añade en su lugar el elemento "Objetos". Elimina el elemento
// "Arrays". Añade en su lugar el elemento "ArraysDifíciles". Haz una copia del array
// que solo incluya los últimos dos elementos. Obtén el índice del elemento
// "Funciones".

let arrayGiven = ["DOM", "BOM", "Funciones", "Arrays"];

arrayGiven.shift(); // elimina el primer elemento del array
arrayGiven.unshift("Objetos"); // añade un elemento al principio del array
arrayGiven.pop(); // elimina el último elemento del array
arrayGiven.push("ArraysDifíciles"); //añade un elemento al final del array

let newArray = arrayGiven.slice(); //copia un array
for (let i=0; i<2; i++){
    newArray.shift();
}
let searchIndex;
for (let i=0; i<newArray.length; i++){
    if(newArray[i] === "Funciones"){
        searchIndex = i;
    }
}
console.log (`El indice del Elemento funciones es ${searchIndex}`);
