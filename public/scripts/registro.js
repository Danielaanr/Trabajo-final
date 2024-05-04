console.log("hola soy registro")
const nuevoUsuario = async() => {


    //Obtener los datos del formulario

const nombreCompleto = document.getElementById("nombreCompleto").value;
const correo = document.getElementById("correo").value;
const contrasena = document.getElementById("contrasena").value;

console.log(nombreCompleto, correo, contrasena);

const datosUsuario ={
    nombreCompleto,
    correo,
    contrasena

}
 console.log(datosUsuario);
//hacer la petición post para crear usuario en nuestra base de datos

try{
    const respuesta =await fetch("http://localhost:9000/api/crearUsuario",
    {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datosUsuario)
    }
);

const nuevoUsuario = await respuesta.json();
console.log("Usuario creado exitosamente", nuevoUsuario)

//condicioinal para redireccionar a ingreso.html
if(nuevoUsuario){
    alert("Registro exitoso!");
window.location.href = "./ingreso.html"
} else{
    alert("Ups! error de registro, inténtelo nuevamente")
}

}catch(error){
    console.error("Error al registrar usuario", error);
}



}
