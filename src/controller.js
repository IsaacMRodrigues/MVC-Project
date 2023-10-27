import { model } from "./model.js";
import { construtorGrafico } from "./view.js";

const controller = {
    iniciar: ()=>{
        construtorGrafico.render(model)
    }
}

export {controller}