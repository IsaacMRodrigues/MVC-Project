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
    attUser(0, user)
  }
  
  viewController.update(data, new Usuario("", "", "", ""))


};

const addUser = (newUser) => {
  data.push(newUser)
};

const clickEsquerdo = (event) => {
  
  const currentId =  event.target.closest('tr').id.split("")[4];
  alert(`${data[currentId].getNome().toUpperCase()} sera carregado para edição`)

}


const clickDireito = (event) => {
  event.preventDefault();
  if(event.button == 2) {
    
    const currentId =  event.target.closest('tr').id.split("")[4];
    alert(`${data[currentId].getNome().toUpperCase()} sera deletado`)
  }
}


const controller = {
  iniciar: () => {
    viewController.build();
    const form = document.getElementById("signForm");
    form.addEventListener("submit", handleSubmit);
    const userList = document.getElementById('users-result');
    userList.addEventListener('click', clickEsquerdo)
    userList.addEventListener('contextmenu', clickDireito)
  },

  
};

export { controller };
