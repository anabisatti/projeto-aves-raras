
function pesquisar() {
   
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de uma ave</p>";
        return;
    }

   
    campoPesquisa = campoPesquisa.toLowerCase();

   
    let resultados = "";

   
    for (let dado of dados) {
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();

        
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
           
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
            `;
        }
    }

    
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>";
    }

   
    section.innerHTML = resultados;
}