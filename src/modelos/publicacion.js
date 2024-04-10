import mongoose from 'mongoose';

const publicaciones = mongoose.Schema(
    {
        descripcion: {
            type: String
        },
        fecha: {
            type: String
        },
        indice: {
            type: String
        },
        created_at: {
            type: Date
        }
    }
);

export default mongoose.model('publicacion', publicaciones);