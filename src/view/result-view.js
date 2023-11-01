

const resultView = {
  build: () => {
    const root = document.getElementById("root");
    const tableResult = document.createElement("table");
    tableResult.setAttribute("id", "resultTable");
    tableResult.className = "table table-bordeless";
    tableResult.innerHTML = `
        <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nome</th>   
        <th scope="col">Idade</th>
        <th scope="col">Login</th>
      </tr>
    </thead>
    <tbody>
      <tr id="users-result">
        <th scope="row">${1}</th>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  
    </table>`;

    root.appendChild(tableResult);
  },

  update: (params) => {

    
    const trBody = document.getElementById('users-result');
    const th = document.createElement('th');
    const tdNome = document.createElement('td');
    const tdIdade = document.createElement('td');
    const tdLogin = document.createElement('td');
    const tdSenha = document.createElement('td');


    for(let i = 0; i < params.length; i++){
        th.setAttribute('scope', 'row');
        th.innerText = i+1.

        let usuario = params;


        tdNome.innerText = params[i].getNome();
        trBody.appendChild(tdNome);

        tdIdade.innerText = params[i].getIdade();
        trBody.appendChild(tdIdade);

        tdLogin.innerText = params[i].getLogin();
        trBody.appendChild(tdLogin);

    }
  }
};

export {resultView}
