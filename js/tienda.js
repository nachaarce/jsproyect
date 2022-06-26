//Evento n° 2 :

//Tienda de expansiones 
//En esta variable se van añadiendo los productos. 
let productos = [];
let total = 0;
//Creo función para añadir productos y sumar su valor una vez que el usuario presiona el boton ''Agregar''
function nuevoProducto (expansion,precio){
    console.log(expansion,precio)
    productos.push(expansion);
    total = total + precio;
    document.getElementById("payButton").innerHTML = `$${total}`
}
//Se muestra en el boton del carrito el total de la compra. 
function pagar() {
    window.alert(productos.join(", \n"));
}