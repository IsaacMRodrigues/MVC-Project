import { viewController } from "./view/viewController.js";
import { Usuario } from "./model/usuario-model.js";

let data = [];

let submitType = {NEW: 0, UPDATE: 1}
let submitState = submitType.NEW;


const handleSubmit = (event) => {
  event.preventDefault();

  const user = new Usuario(nome.value, idade.value, login.value, senha.value);

  if (submitState == submitType.NEW){
    addUser(user);
  } else if (submitState == submitType.UPDATE){

  }
  
  viewController.update(data, new Usuario("", "", "", ""))


};


const addUser = (newUser) => {
  data.push(newUser)
};



const controller = {
  iniciar: () => {
    viewController.build();
    const form = document.getElementById("signForm");
    form.addEventListener("submit", handleSubmit);
  },

  
};

export { controller };
