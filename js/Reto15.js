// 15. Haz lo mismo declarando una clase "receta" e instanciando cada una de las
// nuevas recetas. Luego añádelas a un array y reutiliza la función que habías creado
// en el ejercicio anterior para sacarlas por consola.

// Entorno ********************************

class Receta {

    constructor (nombre, tiempo, ingredientes){
        this.nombre = nombre,
        this.tiempo = tiempo,
        this.ingredientes = ingredientes
    }
}

let receta1 = new Receta("Tarta de chocolate","1:30h",["chocolate","leche","azúcar","mantequilla","galletas"]);
let receta2 = new Receta("Tarta de limon","1:30h",["limones","leche","azúcar","mantequilla","galletas"]);
let receta3 = new Receta("Tarta de queso","1:30h",["queso","leche","azúcar","mantequilla","galletas"]);

let cookingRecipeDesserts = [];

// Funciones ********************************

const CookingRecipeView = (recipe) => {
    for (let element in recipe){
        console.log (recipe[element]);
    }
}

// Algoritmo ********************************

cookingRecipeDesserts.push(receta1);
cookingRecipeDesserts.push(receta2);
cookingRecipeDesserts.push(receta3);

CookingRecipeView(cookingRecipeDesserts);