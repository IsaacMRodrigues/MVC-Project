import { formNewUser } from "./form-new-user.js";
import { resultView } from "./result-view.js";

const viewController = {
    build: ()=>{
        formNewUser.build();
        resultView.build();
    },

    update: (params) => {
        resultView.update(params)
    }
}

export{viewController}