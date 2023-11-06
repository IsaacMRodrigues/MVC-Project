

const resultView = {
  build: () => {
    const root = document.getElementById("root");
    const tableResult = document.createElement("table");
    tableResult.setAttribute("id", "resultTable");
    tableResult.className = "table table-bordeless table-hover";
    tableResult.innerHTML = `
        <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nome</th>   
        <th scope="col">Idade</th>
        <th scope="col">Login</th>
        <th scope="col">Senha</th>
      </tr>
    </thead>
    <tbody id="users-result">

    </tbody>
  
    </table>`;

    root.appendChild(tableResult);
  },

  update: (params) => {

    const tr = document.createElement('tr')
    let id = 0;
    let numero = document.createElement('td');

    const trBody = document.getElementById('users-result');
    const th = document.createElement('th');
    const tdNome = document.createElement('td');
    const tdIdade = document.createElement('td');
    const tdLogin = document.createElement('td');
    const tdSenha = document.createElement('td');
    

    for(let i = 0; i < params.length; i++){
        th.setAttribute('scope', 'row');
        th.innerText = i+1.



        tdNome.setAttribute('style', 'color: green')
        tdLogin.setAttribute('style', 'color: blue')
        
        
        trBody.appendChild(tr)
        numero.innerText = id;
        tr.appendChild(numero)
        tdNome.innerHTML = `<strong>${params[i].getNome()}</strong>`;
        tr.appendChild(tdNome);

        tdIdade.innerHTML = `<strong>${params[i].getIdade()} </strong>`;
        tr.appendChild(tdIdade);

        tdLogin.innerHTML = `<strong><i> ${params[i].getLogin()} </i></strong>`;
        tr.appendChild(tdLogin);

        tdSenha.innerHTML = `<input class="form-control" type="password" value="${params[i].getSenha()}" disabled ></input>`;

        
        tr.appendChild(tdSenha);
        id++;
    }

  }
};


export {resultView}
