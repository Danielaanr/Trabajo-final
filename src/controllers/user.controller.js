//importar dependencias es decir lo que se necesita 
import usuarioModel from "../models/user.model.js";
/*
peticiones
GET me muestra ususarios
POST crea usuarios
PUT modifica usuarios
DELETE elimina usuarios
*/
// prueba inicial 
//lógica para mostrar usuario
export const getUsuario = async (req, res) => {
    //manejo de errores con try catch
    try {
        let usuarios = await usuarioModel.find();
    return res.send(usuarios);
    return res.json({error: "error al mostrar los datos" + error});    
    }catch(error){

    }
}

//lógica para crear usuarios 
export const postUsuario = async(req, res) => {
    //manejo de errores con try y catch
    try{
        let datosUsuario = req.body;
        let nuevoUsuario = await usuarioModel.create(datosUsuario);
        return res.json(nuevoUsuario);
    }catch(error){
    return res.json({error: "error al crear el usuario", 
    message:error.message})
    }
}
//LÓGICA PARA MODIFICAR USUARIOS
export const putUsuario = async(req, res) => {
   try{
    let datosModificar = req.body;
    let idModificar = req.params._id;

    await usuarioModel.findByIdAndUpdate(idModificar,datosModificar);

return res.json({message: "Usuario Actualizado"});

   }catch(error){return res.json({error: "error al modificar el usuario", 
   message:error.message})

   }
}
//logica para eliminar usuarios
export const deleteUsuario = async(req, res) => {
try{
    let idEliminar = req.params._id;
    let usuarioEliminar = await usuarioModel.findByIdAndDelete(idEliminar);

if(usuarioEliminar){
    return res.jason({message: "Usuario eliminado correctamente"});
    }else{
        return res.json({message: "Ups! no se pudo eliminar este usuario"});
    }
}catch(error){return res.json({error: "error al eliminar el usuario", 
message:error.message})

}
} 