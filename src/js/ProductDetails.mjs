// Variables
const productos = document.querySelector('#marmot');
console.log(productos)
const resultado = document.querySelector('.product-detail');

// Escucha de eventos
eventListener();

function eventListener() {
    productos.addEventListener('click', obtenerDatos);
}

// Funciones
function obtenerDatos() {
    console.log(productos)
    // fetch(this.productos)
    //     .then(response => {
    //         console.log(response);
    //     })
}