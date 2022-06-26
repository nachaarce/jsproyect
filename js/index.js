//Cree dos eventos. 
//1 - El usuario se une a la ''comunidad'' ingresando su nombre y email. (se encuentra en otro archivo js)
//2- El usuario agrega productos al carrito y se van sumando. 

//Evento n° 1: 
//El usuario ingresa su nombre y email , presiona 'unirse' y recibe un mensaje. 

let form1 = document.getElementById('form1')
let result = document.getElementById('result')

form1.addEventListener("submit",validarUsuario);

//Funcion que valida los datos del usuario
function validarUsuario(e){
    e.preventDefault();
    let nombre = document.getElementById("inputNombre").value;
    let email = document.getElementById("inputEmail").value;

    if(nombre == ""){
        result.innerText ="Es inválido. Ingresa tus datos"
    }else{
        result.innerText =`Bienvenida/o a la comunidad ${nombre} !`
    }
}
