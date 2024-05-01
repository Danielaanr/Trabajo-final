//importar las dependencias que necesitemos
import mongoose from "mongoose";

const schema = mongoose.Schema;

//esquema de datos que se guardará en la base de datos --estructura

const usuarioSchema = new schema({
    nombreCompleto:{
        type:String, 
        required: true
    },
    correo:{
        type: String,
        required: true
    },
    contrasena: {
        type: String,
        required: true 
    }
})

//yo quiero enviar una plantilla schema a la base de datos
//crear modelo
const usuarioModel= mongoose.model("usuario",usuarioSchema);

//exportar
export default usuarioModel;

// ejemplo operaciones matematicas const sumar= () => {}
    

