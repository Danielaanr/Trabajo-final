try{
    console.log("hola soy ingreso");
    
    const iniciarSesion = async () => {
        const usuario= document.getElementById("usuario").value;
        const contrasena= document.getElementById("contrasena").value;
    
        console.log(usuario, contrasena);
        const respuesta = await fetch ("http://localhost:9000/api/obtenerUsuario");
    
        const usuarios = await respuesta.json();
        console.log(usuarios);
    
        //verificar
    
        const esUsuarioRegistrado = usuarios.find(usuario => usuario.correo == correo && usuario.contrasena == contrasena);
    
        if(esUsuarioRegistrado){

            //verificamos si es admind
            const correoAdmind = "admind@gmail.";
            if(esUsuarioRegistrado.correo==correoAdmind){
                alert("Hola Administrador!");
                window.location.href= "./admind.html"
            }else{
                alert("Ingreso exitoso");
                window.location.href= "./index.html"
            }

        }else{
            alert("Correo o contraseña incorrectos. Usuario no encontrado! Vuelve a interntarlo o resgístrate");

        }

    }

}catch(error){
    console.error("Error al verificar inicio de sesión", error);

}