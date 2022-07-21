//Cree dos eventos. 
//1 - El usuario se une a la ''comunidad'' ingresando su nombre y email. 
//2- El usuario agrega productos al carrito y se van sumando. 

//Evento n° 1: 
//El usuario ingresa su nombre y email , presiona 'unirse' y recibe un mensaje. 

let form1 = document.getElementById('form1')
let result = document.getElementById('result')
let btnUnirse = document.getElementById('btnUnirse')

form1.addEventListener("submit",validarUsuario);

//Funcion que valida los datos del usuario
function validarUsuario(e){
    e.preventDefault();
    let nombre = document.getElementById("inputNombre").value;
    let email = document.getElementById("inputEmail").value;

    if(nombre == ""){  //Si el usuario no ingresa sus datos se devuelve un alert con error. Hago uso de Sweet Alert
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar tus datos',
        })
    }else{
        Swal.fire({ //Si el usuario ingresa sus datos, se devuelve un alert exitoso
            icon: 'success',
            title: 'Fantástico!',
            text: `Bienvenida/o a la comunidad ${nombre}`,
        })
    }
}

const contenedorTabla = document.getElementById ('contenedorTabla')
//Se muestra información de las expansiones que aparecen en la primer pagina.
function infoExpansiones () { 
    let btnInfo = document.getElementById ('btnInfo')
    btnInfo.addEventListener("click", () => {
        mostrarInfo() })
}
infoExpansiones ()
function mostrarInfo () {
    fetch ('/expansiones.json')
    .then ((res) => res.json ())
    .then ((info) => {
        info.forEach ((expId) => {
            const div = document.createElement ('div')
            div.classList.add ('tablaInfo')
            div.innerHTML = `
            <h3>${expId.nombre}</h3>
            <h6>${expId.titulo}</h6>
            <p>${expId.desc}</p>
            `
        contenedorTabla.appendChild(div)
        } )
    })
}

