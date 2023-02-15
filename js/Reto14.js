// 14. Reutiliza la receta del ejercicio anterior y añádela a un array que contenga
// varias recetas similares, con las mismas propiedades. Utiliza también la función del
// ejercicio anterior y saca por consola todas las recetas de tu array

// Entorno ****************************************

let cookingRecipeDessertMonday = {
    nombre: "Tarta de chocolate",
    tiempo: "1:30h",
    ingredientes: ["chocolate","leche","azúcar","mantequilla","galletas"]
}
let cookingRecipeDessertWednesday = {
    nombre: "Tarta de limón",
    tiempo: "1:10h",
    ingredientes: ["limones","leche","azúcar","mantequilla","galletas"]
}
let cookingRecipeDessertFriday = {
    nombre: "Tarta de queso",
    tiempo: "1:20h",
    ingredientes: ["queso","leche","azúcar","mantequilla","galletas"]
}

let cookingRecipeDesserts = [];

// Funciones ***************************************

const CookingRecipeView = (recipe) => {
    for (let element in recipe){
        console.log (recipe[element]);
    }
}

// Algoritmo ****************************************

cookingRecipeDesserts.push(cookingRecipeDessertMonday);
cookingRecipeDesserts.push(cookingRecipeDessertWednesday);
cookingRecipeDesserts.push(cookingRecipeDessertFriday);

CookingRecipeView(cookingRecipeDesserts);