import api from ".";
import { Evaluado } from "my-types";

//GET ALL EVALUADOS
export const getAllEvaluados = async () => {
    try {
        const res = await api.get(`/evaluados/getallevaluados`);
        // console.log(res.data); -> for connection testing purpose
        const evaluados: Evaluado[] = await res.data.payload;
        return evaluados;
    } catch (err) {
        console.log(err);
        return [];
    }
};
