//Bienvenido WEB 
alert ("Hola, gracias por visitarnos!")

//PRODUCTOS -obj
class Expansion {
    constructor (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    }
    Info(){
        return this.nombre + " $" + this.precio
    }
    Descuento(){
    let resultado = "Se ha aplicado el descuento, ahora tu expansión cuesta "+"$"+ this.precio * 0.50;
    return resultado;
    }
    Precio (){
        return  "$ " + this.precio
    }
}
const expansionUniv = new Expansion ("Vida de Universidad", 1500);
const expansionFama = new Expansion ("Rumbo a la Fama", 1550); 
const expansionIsla = new Expansion ("Vida en la Isla", 1700);
const packCine = new Expansion ("Noche de Cine", 900);
const packMascota = new Expansion ("Mascotas", 1050);
const packMsch = new Expansion ("Moschino", 870);


//SOLICITAR usuario 
let usuario1 = prompt ("Quieres ver nuestras Expansiones y Packs de Accesorios? \n1.Si \n2.No");
let usuario2 = undefined;

//MOSTRAR EXPANSIONES Y PACKS 
if ((usuario1 == "si") || (usuario1 == "1") || (usuario1 == "Si")    ){
    mostrarExp();
}else if ((usuario1 == 2) || (usuario1 == "no") || (usuario1 == "No" )) {
    alert ("Gracias por visitarnos! Adios.");
} else {
    alert ("ERROR! No es válido")
    usuario1 =  +prompt ("Quieres ver nuestras Expansiones y Packs de Accesorios? \n1.Si \n2.No");
}

function mostrarExp () {
usuario2 = +prompt(`Selecciona la Expansion o Pack que desees:\n
1-${expansionUniv.Info()}\n
2-${expansionFama.Info()}\n
3-${expansionIsla.Info()}\n
4-${packCine.Info()}\n
5-${packMsch.Info()}\n
Sorpresa! La Expansion: Vida de Universidad tiene un descuento`);
}
//DESCUENTO 

if (usuario2 == 1){
    let usuario2 = prompt ("Aplica el descuento con el codigo SIMMER2022");
    if (usuario2 == "SIMMER2022") 
        alert (expansionUniv.Descuento());
    }
    else if ((usuario2>= 2) && (usuario2 <=5)){
        let usuario3 = prompt("Muy buena elección! Quieres añadir el Pack Mascotas al carrito? \n1.Si \n2.No")
        if (usuario3 == 1) {
            alert ("Se añadió"+ agregarPack())
        }
    }
    else {
        alert ("ERROR! Invalido")
    }

    //AGREGAR PRODUCTO 
    let productosCatalogo = [expansionFama, expansionIsla, packCine, packMsch]
    //Funcion
    function agregarPack() {
        productosCatalogo.push(packMascota)
    }
