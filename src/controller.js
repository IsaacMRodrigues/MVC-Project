import { viewController } from "./view/viewController.js";
import { Usuario } from "./model/usuario-model.js";

let data = [];

const saveData = (event) => {


  function verificaVazio(texto, texto2) {

    if (texto === '') {
        document.getElementById(texto2).innerHTML = "Preencha todos os campos";
        return true;
    } else {
        document.getElementById(texto2).innerHTML = " ";
        return false;
    }

}




  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const login = document.getElementById("login").value;
  const senha = document.getElementById("senha").value;

if (!verificaVazio(nome, "alerta") && !verificaVazio(idade, "alerta") && !verificaVazio(login, "alerta") && !verificaVazio(senha, "alerta")) {

    const newData = new Usuario(nome, idade, login, senha);
    data.push(newData);
    viewController.update(data);
  
    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("login").value = "";
    document.getElementById("senha").value = "";

  }





 

};

const controller = {
  iniciar: () => {
    viewController.build();
    const form = document.getElementById("signForm");
    form.addEventListener("submit", saveData);
  },
};

export { controller };
