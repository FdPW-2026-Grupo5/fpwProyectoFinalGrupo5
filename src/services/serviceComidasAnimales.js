import axios from "axios";

export const listarComidasAnimales = async () => {
    try {
        const respuesta = await axios.get('/data/comidas-animales.json');
        return respuesta.data;
    } catch (e) {
        throw new Error(e);
    }
};