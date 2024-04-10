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
        const { descripcion, fecha, created_at } = req.body;
        const nuevaPublicacion = new publicacion({
            descripcion,
            fecha,
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