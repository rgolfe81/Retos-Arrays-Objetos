// 5. Crea dos arrays de la misma longitud y una función que cree un nuevo array que
// intercale sus elementos y vacíe los arrays originales. Por ejemplo, con los arrays
// arrayUno = [1, 2, 3] y arrayDos = [4, 5, 6] el resultado debería ser [1, 4, 2, 5, 3, 6]

const IntercalaArrays = (array1, array2) => {
    for(let i=0; i<array1.length; i++){
        mixArray.push(array1[i]);
        mixArray.push(array2[i]);
    }
    for(let i=0; i<10; i++){
        array1.pop();
        array2.pop();
    }
    return mixArray;
}

let mixArray = [];
let arrayUno = [1,2,3,4,5,6,7,8,9,10];
let arrayDos = ["A","B","C","D","E","F","G","H","I","J"];

IntercalaArrays (arrayUno,arrayDos);
console.log (`El mix generado entre los dos arrays es ${mixArray}`);

