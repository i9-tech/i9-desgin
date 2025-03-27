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
const tdItens = document.querySelectorAll(".item");

tdItens.forEach((item) => {
  item.title = item.innerText;
});

const secaoTabela = document.querySelector(".secao4");
const tabelaItens = document.createElement("table");
secaoTabela.appendChild(tabelaItens);

fetch("./data.json")
.then(response => response.json())
.then(data => construirTabela(Object.values(data.Produto)))
.catch(error => console.error("Erro ao carregar JSON:", error));

function construirTabela(dadosProdutos) {
    const cabecalhoTabela = document.createElement("tr");
    cabecalhoTabela.classList.add("header");
    
    const chaves = Object.keys(dadosProdutos[0]); 
        chaves.forEach(chave => {
            const itensCabecalho = document.createElement("th");
            itensCabecalho.innerText = chave
            itensCabecalho.scope = "col";
            cabecalhoTabela.appendChild(itensCabecalho);
        });

    console.log(cabecalhoTabela);
    tabelaItens.appendChild(cabecalhoTabela);
     



//   const linhaItem = document.createElement("tr");
//   linhaItem.classList.add("lista-item");

//   const infoItem = document.createElement("td");
//   infoItem.classList.add("item");

//   const botaoEditar = document.createElement("button");
//   const botaoDeletar = document.createElement("button");

//   botaoEditar.classList.add("item");
//   botaoDeletar.classList.add("item");
}
