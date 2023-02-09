// 7. Utilizando el array del ejercicio anterior, crea una función que saque por consola
// únicamente los números mayores que 5.

const ArrayHigher5 = (array) => {
    array.map(elemento => {
        if (elemento > 5) {
            newArray.push(elemento);
        }
    })
    return newArray;
}

let newArray = [];
let array = [1,2,3,4,5,6,7,8,9,10];
ArrayHigher5(array);

console.log(`El array con elementos mayores de 5 es : ${newArray}`);