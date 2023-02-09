// 8. Dados los arrays javascript1 = ["DOM", "BOM", "Funciones", "Arrays"] y
// javascript2 = ["Objetos", "Arrays", "ParseInt"], crea una función que determine si se
// repite algún elemento y lo saque por consola.

const RepiteElement = (array1, array2) => {
    array1.map(elemento => {
        if (array2.includes(elemento)){
            console.log (`Elemento repetido entre los arrays : ${elemento}`);
        }
    })
}

javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
javascript2 = ["Objetos", "Arrays", "ParseInt"];

RepiteElement (javascript1, javascript2);