//Bienvenido WEB 
alert ("Hola, gracias por visitarnos!")

//Clase Expansion
class Expansion {
    constructor (nombre, precio, anio) {
    this.nombre = nombre;
    this.precio = precio;
    this.anio = anio;
    }
//Informacion, descuento y precio de las Expansiones
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
//OBJETOS - Expansiones
const expansionUniv = new Expansion ("Vida de Universidad", 1500, 2017);
const expansionFama = new Expansion ("Rumbo a la Fama", 1550,2018); 
const expansionIsla = new Expansion ("Vida en la Isla", 1700,2020);
const packCine = new Expansion ("Noche de Cine", 900, 2019);
const packMascota = new Expansion ("Mascotas", 1050, 2021);
const packMsch = new Expansion ("Moschino", 870,2017);


//Solicito al usuario 
let entrada1 = prompt ("Quieres ver nuestras Expansiones y Packs de Accesorios? \n1.Si \n2.No");
let entrada2 = undefined;

if ((entrada1 == "si") || (entrada1 == "1") || (entrada1 == "Si")    ){
    mostrarExp();
}else if ((entrada1 == 2) || (entrada1 == "no") || (entrada1 == "No" )) {
    alert ("Gracias por visitarnos! Adios.");
} else {
    alert ("ERROR! No es válido")
    entrada1 =  +prompt ("Quieres ver nuestras Expansiones y Packs de Accesorios? \n1.Si \n2.No");
}
//MOSTRAR INFO EXPANSIONES Y PACKS 
function mostrarExp () {
entrada2 = +prompt(`Selecciona la Expansion o Pack que desees:\n
1-${expansionUniv.Info()}\n
2-${expansionFama.Info()}\n
3-${expansionIsla.Info()}\n
4-${packCine.Info()}\n
5-${packMsch.Info()}\n
Sorpresa! La Expansion: Vida de Universidad tiene un descuento`);
}
//DESCUENTO Y CARRITO DE COMPRAS.
if (entrada2 == 1){
    let entrada2 = prompt ("Aplica el descuento con el codigo SIMMER2022");
    if (entrada2 == "SIMMER2022") 
        alert (expansionUniv.Descuento() + " Gracias por tu compra!");
    }
    else if ((entrada2>= 2) && (entrada2 <=5)){
        let usuario3 = prompt("Muy buena elección! Quieres añadir el Pack Mascotas al carrito? \n1.Si \n2.No")
        if (usuario3 == 1) {
            alert ("Se añadió "+ packMascota.Info()+ " al carrito.")
        }
        else if (usuario3 == 2) {
            alert ("Gracias por tu compra!")
        }
    }
    else {
        alert ("ERROR! Invalido")
    }
