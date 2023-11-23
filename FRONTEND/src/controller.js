import { view } from "./view/view.js";
import { Usuario } from "./model/usuario-model.js";
import { resultView } from "./view/result-view.js";
import { dataService } from "./api/data.service.js";

let data = [];

let submitType = { NEW: 0, UPDATE: 1 };
let submitState = submitType.NEW;
let currentId = null;
const nullUser = new Usuario(null, null, null, null)

const loadData = async () => {
  const temp = await dataService.carregarDados();
  data = temp.map(
    (usuario) => new Usuario(usuario.nome, usuario.idade, usuario.login, usuario.senha)
  );
  view.update(data, nullUser)
};

function validaLogin(login) {
  return data.some((data) => data.login === login);
}

const getFormInput = () => {
  return new Usuario(nome.value, idade.value, login.value, senha.value);
}


const handleSubmit = (event) => {
  event.preventDefault();
  if (
    nome.value == "" ||
    idade.value == "" ||
    login.value == "" ||
    senha.value == ""
  ) {
    alert("Preencha todos os campos");
  } else if (validaLogin(login.value) && submitState == submitType.NEW) {
    alert("Esse Login já está sendo utilizado");
  } else {
    const user = getFormInput();
    if (submitState == submitType.NEW) {
      addUser(user);
    } else if (submitState == submitType.UPDATE) {
      updateUser(currentId, user);
      submitState = submitType.NEW;
      login.disabled = false;
      senha.disabled = false;
      btnSub.innerText = "Salvar";
      resultView.update(user);
    }
    view.update(data, nullUser);
  }
};

const addUser = (newUser) => {
  data.push(newUser);
  dataService.salvarDados(data)
};

const updateUser = (index, userToUpdate) => {
  data[index] = userToUpdate;
  dataService.salvarDados(data);
};

const deleteUser = (index) => {
  data.splice(index, 1);
  dataService.salvarDados(data);
};

const handleClick = (event) =>{
  currentId = event.target.closest("tr").id.split("")[4];
  if (event.type == 'click') {
    const confirmUpdate = window.confirm( `Deseja editar o usuario ${data[currentId].getNome().toUpperCase()} ?`);

    if(confirmUpdate){
      view.updateForm(data[currentId]);
      login.disabled = true;
      senha.disabled = true;
      submitState = submitType.UPDATE;
      btnSub.innerText = "Atualizar";
    }
    
  } else if(event.type == 'contextmenu') {
    event.preventDefault();
    const confirmDelete = window.confirm( `Deseja excluir ${data[currentId].getNome().toUpperCase()} da lista ?`)

    if(confirmDelete){
      deleteUser(currentId);
      resultView.update(data);
    }
    
  }
  }

const setEvents = () => {
  const form = document.getElementById("signForm");
  form.addEventListener("submit", handleSubmit);
  const userList = document.getElementById("users-result");
  userList.addEventListener("click", handleClick);
  userList.addEventListener("contextmenu", handleClick);
}

const controller = {
  run: () => {
    view.render();
    setEvents();
    window.onload = () => {
      loadData();
    }
  },
};

export { controller };
