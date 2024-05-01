console.log("Hola soy admin")
const mostrarUsuarios = async()=>{
try{
const respuesta= await fetch("http://localhost:9000/api/obtenerUsuario")
const usuarios= await respuesta.json();
console.log(usuarios);
mostrarTabla(usuarios);

}catch(error){
console.error("Error al obtener los usuarios");

}

}
function mostrarTabla(usuarios){
const tabla = document.getElementById("miTabla");
translateOptions.innerHTML =" ";


}

mostrarUsuarios();