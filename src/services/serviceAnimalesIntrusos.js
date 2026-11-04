import axios from "axios";

export const listarAnimalesInstrusos = async () => {
    try {
        const respuesta = await axios.get('/data/animales-intrusos.json');
        return respuesta.data;
    } catch (e) {
        throw new Error(e);
    }
};