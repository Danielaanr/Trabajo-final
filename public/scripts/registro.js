console.log("hola soy registro")
const registrarUsuario = async() => {


    //Obtener los datos del formulario

const nombre = document.getElementById("nombre").value;

const apellidos = document.getElementById("apellidos").value;
const correo = document.getElementById("correo").value;

const contrasena = document.getElementById("contrasena").value;

console.log(nombre, apellidos, correo, contrasena);

const datosUsuario ={
    nombre,
    apellidos,
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

const nuevoUsuario=await respuesta.json();
console.log("Usuario creado exitosamente", nuevoUsuario)

//condicioinal para redireccionar a ingreso.html
if(nuevoUsuario){
    alert("Registro exitoso!");
window.location.href = "./ingreso.html"
} else{
    alert("Ups! error de registro, intente nuevamente")
}

}catch(error){
    console.error("Error al registrar usuario", error);
}



}
