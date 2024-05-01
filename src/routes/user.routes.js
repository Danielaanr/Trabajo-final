// IMPORTAMOS DEPENDENCIAS
//turas conectan el front con lógica

import express from "express";
import { getUsuario, postUsuario, putUsuario, deleteUsuario } from "../controllers/user.controller.js";

//variable

const usuarioRouter =express.Router();

//definimos rutas especificas
//ruta para obtener usuarios
usuarioRouter.get("/obtenerUsuario", getUsuario);

//ruta para crear usuarios

usuarioRouter.post("/crearUsuario", postUsuario);

//Ruta para modificar usuarios por su id

usuarioRouter.put("/modificarUsuario/:_id", putUsuario);

//eliminar usuario por id
usuarioRouter.delete("/eliminarUsuario/:_id", deleteUsuario);

//exportar usuarios

export default usuarioRouter;

