import { Router } from "express";
import { metodos as controlador } from "./../controladores/controlador.js"

const rutas = Router();

rutas.get("/", controlador.leerDatos);
rutas.get("/:id", controlador.leerDato);
rutas.post("/", controlador.crearDatos);
rutas.delete("/:id", controlador.eliminarDatos);
rutas.put("/:id", controlador.actualizarDato);

export default rutas;