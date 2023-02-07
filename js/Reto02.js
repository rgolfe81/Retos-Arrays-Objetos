// 2. Crea un array con los nombres de los planetas del Sistema Solar. Crea una
// función que los liste y los saque por consola


const ListPlanets = (array) => {
    for (let i=0; i<array.length; i++){
        console.log (array[i]);
    }
}

let planets = ['Mercurio', 'Venus', 'Tierra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Neptuno'];

ListPlanets (planets);

