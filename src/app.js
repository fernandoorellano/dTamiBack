import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import controladorRutas from "./rutas/rutas.js"

const app = express();

app.use(cors())

app.use(bodyParser.json());

// configuracion
dotenv.config();

app.set("port", process.env.PORT);
app.set("mongo_uri", process.env.MONGO_URI);

// middlewares
app.use(express.json());

// rutas
app.use("/publicaciones", controladorRutas);

export default app;