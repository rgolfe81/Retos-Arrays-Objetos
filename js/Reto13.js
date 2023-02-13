// 13. Crea un objeto que contenga una receta de cocina, con propiedades asignadas
// a su nombre, tiempo de preparación e ingredientes. Haz una función que saque por
// consola el nombre, el tiempo y una lista de los ingredientes.

let cookingRecipe = {
    nombre: "Tarta de chocolate",
    tiempo: "1:30h",
    ingredientes: ["chocolate","leche","azúcar","mantequilla","galletas"]
}

const CookingRecipeView = (recipe) => {
    for (let element in recipe){
        console.log (recipe[element]);
    }
}

CookingRecipeView(cookingRecipe);