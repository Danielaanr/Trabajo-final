//importamos
import mongoose from "mongoose";

//crear una función que conecte la base de datos

const conexionMongo = async() => {
    
await mongoose.connect(process.env.BD_URL,{})
//control de errores/condicional
try{
    console.log("conexión exitosa");
} catch(error){
console.long("Error de conexión:", error.message)
}
}

export default conexionMongo; 