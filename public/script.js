const header = document.querySelector('.cabecalho');
const botaoHeader = document.querySelector('#header');

const secoes = document.querySelectorAll('.secao');
secoes.forEach(secao => secao.style.display = 'none');


const scnAtual = document.querySelector('#scnAtual');

const botoes = [
    { btn: document.querySelector('#btn-hover'), secao: 1, nome: "Hovers"},
    { btn: document.querySelector('#btn-botao'), secao: 2, nome: "Botões"},
    { btn: document.querySelector('#btn-modal'), secao: 3, nome: "Modal/Cards"},
    { btn: document.querySelector('#btn-lista'), secao: 4, nome: "Listas"},
    { btn: document.querySelector('#btn-menu'), secao: 5, nome: "Menu"},
];

botaoHeader.addEventListener('click', () => {
    if (header.style.display === 'none') {
        header.style.display = 'flex';
        botaoHeader.innerHTML = 'Esconder Menu';
    } else {
        header.style.display = 'none';
        botaoHeader.innerHTML = 'Mostrar Menu';
    }
});

botoes.forEach(({ btn, secao, nome }) => {
    btn.addEventListener('click', () => {
        secoes.forEach(sec => sec.style.display = 'none');

        const secaoSelecionada = document.querySelector(`.secao${secao}`);
        if (secaoSelecionada) {
            secaoSelecionada.style.display = 'flex';
            scnAtual.innerHTML = `Categoria selecionada: <b style='color: red'>${nome}</b>`
        }
    });
});

/* SEÇÃO 4 - LISTAS */
/* SCRIPT PARA LISTA DE ITENS ESTOQUE */
const spanItems = document.querySelectorAll(".item");

spanItems.forEach(item => {
  item.title = item.innerText;
});