import { viewController } from "./view/viewController.js";
import { Usuario } from "./model/usuario-model.js";
import { resultView } from "./view/result-view.js";

let data = [];

let submitType = {NEW: 0, UPDATE: 1}
let submitState = submitType.NEW;
let currentId = null;


function validaLogin(nome) {
  return data.some(data => data.nome === nome);
}


const handleSubmit = (event) => {
  event.preventDefault();

  if(nome.value == "" || idade.value == "" || login.value == "" || senha.value == ""){
    alert("Preencha todos os campos")
  } else if(validaLogin(login.value) && submitState == submitType.NEW){
    alert("Esse Login já está sendo utilizado");
  } else {

  const user = new Usuario(nome.value, idade.value, login.value, senha.value);
  if (submitState == submitType.NEW){
    addUser(user);
  } else if (submitState == submitType.UPDATE){
    updateUser(currentId, user);
    submitState = submitType.NEW;
    login.disabled = false;
    btnSub.innerText = "Salvar";
    resultView.update(user);
  }
  viewController.update(data, new Usuario("", "", "", ""))
}
};

const addUser = (newUser) => {
  data.push(newUser)
};


const updateUser = (index, userToUpdate) => {
  data[index] = userToUpdate;
}

const deleteUser = (index) => {
  data.splice(index, 1)
}

const clickEsquerdo = (event) => {
  
  currentId =  event.target.closest('tr').id.split("")[4];
  alert(`${data[currentId].getNome().toUpperCase()} sera carregado para edição`);
  viewController.updateForm(data[currentId])
  login.disabled = true;
  submitState = submitType.UPDATE;
  btnSub.innerText = "Atualizar";

}


const clickDireito = (event) => {
  event.preventDefault();
  if(event.button == 2) {
    
    currentId =  parseInt (event.target.closest('tr').id.split("")[4]);
    alert(`${data[currentId].getNome().toUpperCase()} sera deletado ${currentId}`)
    deleteUser(currentId);
    resultView.update(data);

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
