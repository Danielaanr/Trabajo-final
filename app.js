//1 importar las dependencias que vamos a usar
import express from "express";
import path from "path";
import dotenv from "dotenv";
import usuarioRouter from "./src/routes/user.routes.js";
import conexionMongo from "./src/config/Basededatos.js";
import cors from "cors";

//2 configurar nuestro servidor

const app = express ();
const puerto = 9000;
app.use(cors())
//2.1 variables de entorno
dotenv.config();
//2.2 configurar conexión mongo
conexionMongo();

//3 establecer la conexión con nuestro index

const rutaPublica = path.join(process.cwd(),"public");
app.use(express.static(rutaPublica));
app.use(express.json());

app.use("/api", usuarioRouter);

//acceder a nuestro index.html
app.get("/", (req,res) => {
res.sendFile(path.join(rutaPublica, "index.html")); 


}); 


//4 inicializamos el servidor

app.listen(puerto, () =>{
    console.log (`el servidor esta escuchando en http://localhost:${puerto}`);


});