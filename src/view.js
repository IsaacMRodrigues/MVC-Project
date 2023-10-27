const construtorGrafico = {
    render: (parametros) => {
        const elemento = document.getElementById('conteudo')
        elemento.innerHTML = `
        <div>
        <h1>Model, View and Controller</h1>
    </div>
    <p>
        A arquitetura MVC,é um padrão de densenvolvimento Otientado a Objetos.
         
        Modelo = classes, modelos e objetos
        View = a "visão" onde a interface gráfca do programa é criada
        Controller = controlador das ações de requisição do usuário com a aplicação
    </p>
            <h2>${parametros.titulo}</h2>
            <img src="${parametros.imgSrc}">
            <p>${parametros.conteudo}</p>
        `
    }
}
export {construtorGrafico};