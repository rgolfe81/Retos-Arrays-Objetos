// 6. Crea un array con al menos 10 números y una función que los divida en otros
// dos arrays: uno para pares y otro para impares. A continuación, saca por consola ambos arrays resultantes concatenados.

const SplitArrayParImpar = (array) => {
    for (let i=0; i<array.length; i++){
        if (array[i]%2 == 0){
            arrayPar.push(array[i]);
        }
        else{
            arrayImpar.push(array[i]);
        }
    }
    arrayConcat = arrayPar.concat(arrayImpar);
    return arrayConcat;
}



let array = [1,2,3,4,5,6,7,8,9,10];
let arrayPar = [];
let arrayImpar = [];
let arrayConcat = [];

SplitArrayParImpar(array);

console.log (`El array concatenado de los números pares e impares es ${arrayConcat}`);