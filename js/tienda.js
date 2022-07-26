//Evento n° 2 :

//Tienda de expansiones 

//DECLARACION DE VARIABLES 
const contenedorExp = document.getElementById("contenedorExp");
const contenedorCarrito = document.querySelector("tbody")
const precioTotal = document.getElementById('precioTotal');
const vaciarCarrito = document.getElementById('vaciarCarrito')
let carrito = [];


//Array que contiene datos de mis expansiones
let stockExpansiones = [ 
    {id: 1 , nombre: "Los Sims 4-Juego base", cantidad: 1, precio: 1600, img: '../gallery/sims-base.png'},
    {id: 2 , nombre: "Rumbo a la fama", cantidad: 1, precio: 1550, img: '../gallery/exp-fama.png'},
    {id: 3 , nombre: "Vida de Universidad",cantidad: 1,  precio: 1500 , img: '../gallery/exp-univ.png'},       
    {id: 4 , nombre:  "Vida en la Isla"  ,cantidad:  1  ,  precio: 1700 ,  img: '../gallery/exp-isla.png' },
    {id: 5, nombre: "Noche de Cine"   ,cantidad:  1   ,  precio:  900  ,  img: '../gallery/pk-cine.png'  },      
    {id: 6, nombre: "Mascotas"   , cantidad: 1  ,  precio: 1050 ,  img: '../gallery/pk-mascota.png' },       
    {id: 7, nombre: "Moschino"   ,cantidad: 1  ,  precio:  870  ,  img:  '../gallery/pk-mosc.png'  }
]

//Creo un foreach para recorrer mis expansiones y crear un div en HTML con sus datos e imagen 
stockExpansiones.forEach((expansion) => {
    const div = document.createElement("div")
    div.classList.add ("productContainer")
    div.innerHTML = 
    `<h3>${expansion.nombre}</h3>
    <img src=${expansion.img} alt="">
    <h4 class="precioExpansion">$${expansion.precio}</h4>
    <button class="buttonAdd" id="buttonAgr${expansion.id}">Agregar</button>
    `
    contenedorExp.appendChild(div) //Agrego en el HTML el div creado. 
    
    const boton = document.getElementById(`buttonAgr${expansion.id}`)
     //Por cada elemento de mi array, creo un div, le pongo un id ,
     //le hago un get element by id (el de buttonAgr) Obtengo el elemento y a dicho elemento le agrego
     //el addEventListener
    boton.addEventListener('click', () => {
        Toastify({
            text: "Se añadió al carrito",
            className: "info",
            style: {
            background: "green", 
            duration: 1000
            }
        }).showToast();
        agregarCarrito(expansion.id)
        //esta funcion ejecuta el buttonAgr el carrito con la id del producto
    })
    
}
)
//Funcion para agregar mis productos al carrito 
const agregarCarrito = (expId) => {
    //Aumento la cantidad y que no se repita la expansion en el carrito. 
    const existe = carrito.some (exp => exp.id === expId) //comprobar si el elemento ya existe en el carrito
    if (existe){ //SI YA ESTÁ EN EL CARRITO, actualizo la cantidad
        const exp = carrito.map (exp => { // cuando map encuentre cual es igual al que está agregado, le suma la cantidad
            if (exp.id === expId){
                exp.cantidad++
            }
        })
    } else { //EN CASO DE QUE NO ESTÉ, Agrego la expansino al carrito.
        const item = stockExpansiones.find((exp) => exp.id === expId)
        carrito.push(item) 
           //Cuando obtengo el id, hago un push para agregarlo al carrito
    }
    //Va a buscar el item, agregarlo al carrito y llama a la funcion actualizarCarrito, que recorre
    //el carrito y se actualiza el mismo. 
    actualizarCarrito() 
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "" //Cada vez que llame a actualizarCarrito, lo primero que hago
    //es borrar el nodo. Y despues recorre el array lo actualiza de nuevo y lo rellena con la info actulizada

    //Por cada expansion creo un div hago un append al contenedorCarrito para que ahi se muestre mi expansion con sus datos. 
    carrito.forEach((exp) => {
        const tr = document.createElement('tr')
        tr.className = ('expansionEnCarrito')
        tr.innerHTML = `
        <img src=${exp.img} class="imagenCarrito">
        <p>${exp.nombre}</p>
        <p>$${exp.precio}</p>
        <p><span>${exp.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${exp.id})" class="botonEliminar"><span><i class="fas fa-trash-alt"></i></span></button>
        `
        contenedorCarrito.appendChild(tr)
        localStorage.setItem('carrito', JSON.stringify(carrito)) //convierto en string los objetos de carrito
    })
    precioTotal.innerText = carrito.reduce((acc, exp) => acc + exp.cantidad * exp.precio, 0) //cuando se sume una expansion al carrito, se actualizará el total de compra
}
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito')) //Utilizo localStorage para que al actualizar la pagina se mantengan las expansiones en el carrito
        actualizarCarrito()
    }
})


//Eliminar item de carrito 
const eliminarDelCarrito = (expId) => {
    Toastify({
        text: "Se eliminó del carrito",
        className: "info",
        style: {
        background: "red", 
        duration: 1000
        }
    }).showToast(); //TOASTIFY para notificarle al usuario que su expansion se eliminó.
    const item = carrito.find((exp) => exp.id === expId)
    const indice = carrito.indexOf(item) //Busca el elemento que yo le pase y devuelve su indice.
    carrito.splice(indice, 1) //Le pasamos el indice de mi elemento item y borra un elemento 
    actualizarCarrito() 
}

    //Funcion para vaciar el carrito 
    vaciarCarrito.addEventListener('click', () => {
        Toastify({
            text: "Se vació el carrito",
            className: "info",
            style: {
            background: "red",
            duration: 1000
            }
        }).showToast(); //Utilizo TOASTIFY para notificar que se realizó la acción indicada.
        carrito.length = 0 
        //dependiendo de lo que haya en el carrito, este al hacer click en el boton vaciar carrito vuelve a 0 
        actualizarCarrito() //y se acutualiza llamando la función. 
    })

    //Funcion para finalizar compra -- SWEET ALERT - Se devuelve un alert exitoso. 
    const finalizarCompra = document.getElementById('finalizarCompra');
    finalizarCompra.addEventListener('click',() => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tu compra fue realizada',
            showConfirmButton: false,
            timer: 1000
        })
        carrito.length = 0 
        actualizarCarrito() 
    })