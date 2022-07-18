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


//Se muestra información de las expansiones que aparecen en la primer pagina.
function programarBtnInfo () {
    const btnInfo = document.getElementById('btnInfo');
    btnInfo.addEventListener("click", () => {
        mostrarDatos()
    })
}

function mostrarDatos () {
fetch ('/js/data.json')
.then ((res) => res.json())
.then ((data) => mostrarListDatos(data))
}
function mostrarListDatos (datosLista) {
const contenedorLista = document.getElementById("contenedorLista")
datosLista.forEach((dato) => {
    mostrarDatos(dato, container)
})

}
function mostrarDatos (datos, div)
{
    const divDato = document.createElement("div");
    divDato.innerHTML = `<h4>${datos.title}</h4>
                        <p>${datos.body}</p>`
    div.appendChild(divDato)
}