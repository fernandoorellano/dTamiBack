import publicacion from "./../modelos/publicacion.js"

export const leerDatos = async (req, res) => {
    try {
        const datosGuardados = await publicacion.find();
        res.json(datosGuardados);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const leerDato = async (req, res) => {
    try {
        const dato = await publicacion.findById(req.params.id);
        if(!dato) return res.status(404).json({message: "El id no existe"});
        return res.json(dato);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const crearDatos = async (req, res) => {
    try {
        const { descripcion, fecha, indice, created_at } = req.body;
        const nuevaPublicacion = new publicacion({
            descripcion,
            fecha,
            indice,
            created_at
        })
        await nuevaPublicacion.save();
        res.json(nuevaPublicacion);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const eliminarDatos = async (req, res) => {
    try {
        const datoaBorrar = await publicacion.findByIdAndDelete(req.params.id)
        if(!datoaBorrar) return res.status(404).json({message: "El dato no existe"});
        return res.json(datoaBorrar);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const actualizarDato = async (req, res) => {
    try {
        const {id} = req.params;
        const datoActualizado = await publicacion.findByIdAndUpdate(id, req.body, {
            new: true
        });
        return res.json(datoActualizado);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const metodos = {
    leerDatos,
    leerDato,
    crearDatos,
    eliminarDatos,
    actualizarDato
};


// const leerDatos = () => {
//     try{
//         const datos = fs.readFileSync("./src/database/db.json");
//         return JSON.parse(datos);
//     }
//     catch(error){
//         console.log(error)
//     }
// };

// const crearDatos = (datos) => {
//     try{
//         fs.writeFileSync("./src/database/db.json", JSON.stringify(datos));
//     }
//     catch(error){
//         console.log(error)
//     }
// };

// app.get("/publicaciones", (req, res) => {
//     const datos = leerDatos();
//     res.json(datos.publicacion);
// });

// app.get("/publicaciones/:id", (req, res) => {
//     const datos = leerDatos();
//     const id = parseInt(req.params.id);
//     const publicacionaBuscar = datos.publicacion.find((publicacionaBuscar) => publicacionaBuscar.id === id);
//     res.json(publicacionaBuscar);
// });

// app.post("/publicaciones", (req, res) => {
//     const datos = leerDatos();
//     const body = req.body;
//     const nuevaPublicacion = {
//         id: datos.publicacion.length +1,
//         ...body,
//     };
//     datos.publicacion.push(nuevaPublicacion);
//     crearDatos(datos);
//     res.json(nuevaPublicacion);
// });

// app.put("/publicaciones/:id", (req, res) => {
//     const datos = leerDatos();
//     const body = req.body;
//     const id = parseInt(req.params.id);
//     const publiIndex = datos.publicacion.findIndex((publicacion) => publicacion.id === id);
//     datos.publicacion[publiIndex] = {
//         ...datos.publicacion[publiIndex],
//         ...body,
//     };
//     crearDatos(datos);
//     res.json({message: "Se actualizo la publicacion."})
// });

// app.delete("/publicaciones/:id", (req, res) => {
//     const datos = leerDatos();
//     const id = parseInt(req.params.id);
//     const publiIndex = datos.publicacion.findIndex((publicacion) => publicacion.id === id);
//     datos.publicacion.splice(publiIndex, 1);
//     crearDatos(datos);
//     res.json({message: "Se borro."})
// });

// export default app;