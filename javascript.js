let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde ; 1 - vermelho ; 2 - amarelo ; 3 - azul

const blue = document.querySelector('.azul ');
const red = document.querySelector('.vermelho');
const green = document.querySelector('.verde');
const yellow = document.querySelector('.amarelo');

//cria ordem aletoria de cores
let sorteio = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = criacor(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}
//acende a proxima cor
function lightColor(element, number) {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}
//checa se os botoes clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            fimdejogo();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}
//funcao para o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    criacor(color).classList.add('selected');

    setTimeout(() => {
        criacor(color).classList.remove('selected');
        checkOrder();
    },250);
}
//funcao que retorna a cor
function criacor (color) {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}
function nextLevel() { //funcao para proximo nivel do jogo
    score++;
    sorteio();
}
function fimdejogo() { //funcao para fim de jogo
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];
    iniciar();
}
 function iniciar (){ //funcao de inicio do jogo
    alert('Bem vindo ao Jogo de Memória! Iniciando novo jogo!');
    score = 0;
    nextLevel();
}
//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

iniciar();