const header = document.querySelector(".cabecalho");
const botaoHeader = document.querySelector("#header");

const secoes = document.querySelectorAll(".secao");
secoes.forEach((secao) => (secao.style.display = "none"));

const scnAtual = document.querySelector("#scnAtual");

const botoes = [
  { btn: document.querySelector("#btn-hover"), secao: 1, nome: "Hovers" },
  { btn: document.querySelector("#btn-botao"), secao: 2, nome: "Botões" },
  { btn: document.querySelector("#btn-modal"), secao: 3, nome: "Modal/Cards" },
  { btn: document.querySelector("#btn-lista"), secao: 4, nome: "Listas" },
  { btn: document.querySelector("#btn-menu"), secao: 5, nome: "Menu" },
];

botaoHeader.addEventListener("click", () => {
  if (header.style.display === "none") {
    header.style.display = "flex";
    botaoHeader.innerHTML = "Esconder Menu";
  } else {
    header.style.display = "none";
    botaoHeader.innerHTML = "Mostrar Menu";
  }
});

botoes.forEach(({ btn, secao, nome }) => {
  btn.addEventListener("click", () => {
    secoes.forEach((sec) => (sec.style.display = "none"));

    const secaoSelecionada = document.querySelector(`.secao${secao}`);
    if (secaoSelecionada) {
      secaoSelecionada.style.display = "flex";
      scnAtual.innerHTML = `Categoria selecionada: <b style='color: red'>${nome}</b>`;
    }
  });
});

/* SEÇÃO 4 - LISTAS */
/* SCRIPT PARA LISTA DE ITENS ESTOQUE */
const secaoTabela = document.querySelector(".secao4");
const tabelaItens = document.createElement("table");
secaoTabela.appendChild(tabelaItens);

fetch("./data.json")
.then(response => response.json())
.then(data => construirTabela(Object.values(data.Produto)))
// .then(data => construirTabela(Object.values(data.Funcionario)))
.catch(error => console.error("Erro ao carregar JSON:", error));

function construirTabela(dadosProdutos) {
    // console.log("JSON: ", dadosProdutos)
    const cabecalhoTabela = document.createElement("tr");
    cabecalhoTabela.classList.add("header");
    
    const chaves = Object.keys(dadosProdutos[0]); 
        chaves.forEach(chave => {
            const itensCabecalho = document.createElement("th");
            itensCabecalho.scope = "col";
            if(chave == 'id') {
                itensCabecalho.innerText = 'status'
            } else {
                itensCabecalho.innerText = chave
            }
            cabecalhoTabela.appendChild(itensCabecalho);
        });

    // console.log(cabecalhoTabela);
    tabelaItens.appendChild(cabecalhoTabela);
    
    buscarDados(dadosProdutos, tabelaItens);

}

function buscarDados(dadosProdutos, tabelaItens) {
    let index = 0;
    dadosProdutos.forEach(produto => {
        index++;

        const linhaItem = document.createElement("tr");
        linhaItem.classList.add("lista-item");
        if(index % 2 == 0) {
          linhaItem.style = 'background-color: #E8ECF8';
        }

        const dados = Object.values(produto)
        inserirDados(dados, linhaItem, tabelaItens)
    })

}

// PRODUTOS
function inserirDados(dados, linhaItem, tabelaItens) {

  dados.forEach((valor, chave) => {
    const infoItem = document.createElement("td");
    const spanItem = document.createElement("span");
    infoItem.classList.add("item");
    spanItem.classList.add("item-span");
    if(chave == 9) {
        const botaoEditar = document.createElement("button");
        const botaoDeletar = document.createElement("button");
        botaoEditar.classList.add("item");
        botaoDeletar.classList.add("item");
        botaoEditar.innerText = '✏️';
        botaoDeletar.innerText = '🗑️';
        infoItem.appendChild(botaoEditar);
        infoItem.appendChild(botaoDeletar);
    } else if (chave == 1) {
      infoItem.classList.add('imagem')
      const imagemProduto = document.createElement("img");
      imagemProduto.src = valor;
      infoItem.appendChild(imagemProduto);
    } else if (chave == 4 || chave == 5) {
      spanItem.innerText = "R$ " + valor
      infoItem.appendChild(spanItem);  
    } else {
      spanItem.innerText = valor;      
      infoItem.appendChild(spanItem);  
    }
    linhaItem.appendChild(infoItem);
})
// console.log(linhaItem)
tabelaItens.appendChild(linhaItem);
tituloItens();
}

function tituloItens() {

  const tdItens = document.querySelectorAll(".item-span");
  tdItens.forEach((item) => {
    item.title = item.innerText;
  });
}

// FUNCIONARIOS
// function inserirDados(dados, linhaItem, tabelaItens) {

//   dados.forEach((valor, chave) => {
//     const infoItem = document.createElement("td");
//     const spanItem = document.createElement("span");
//     infoItem.classList.add("item");
//     if(chave == 2) {
//         const botaoEditar = document.createElement("button");
//         const botaoDeletar = document.createElement("button");
//         botaoEditar.classList.add("item");
//         botaoDeletar.classList.add("item");
//         botaoEditar.innerText = '✏️';
//         botaoDeletar.innerText = '🗑️';
//         infoItem.appendChild(botaoEditar);
//         infoItem.appendChild(botaoDeletar);
//     } else {
//       spanItem.innerText = valor;      
//       infoItem.appendChild(spanItem);  
//     }
//     linhaItem.appendChild(infoItem);
// })
// console.log(linhaItem)
// tabelaItens.appendChild(linhaItem);
// }