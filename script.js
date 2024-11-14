// Função para gerar um número aleatorio
alert('Boas vindas ao jogo do número secreto');

const numeroMaximo = 100;
const nivelFacil = 20;
const nivelMedio = 10;
const nivelDificil = 5;

let numeroSecreto = Math.random();
let chute;
let tentativas = 0;

function gerarNumeroAleatorio() {
    let numero = 0;
    numero = Math.floor(numeroSecreto * numeroMaximo) + 1;

    return numero;
} 

numeroSecreto = gerarNumeroAleatorio();

/*
  if = Se
  Else = Senão
  While = Enquanto
*/
while (chute != numeroSecreto) {}
    tentativas++;
    if (tentativas <= nivelMedio) {
chute = prompt(`Escolha um número de 1 a ${numeroMaximo};`);
   
    if (chute == numeroSecreto) {
        alert(`Parabens!!! Você acertou o número secreto ${numeroSecreto} 
        com ${tentativas} ${tentativas == 1 ? 'tentativa': 'tentativas'}.`);
    } else {
        alert(`Voce Errou!!!\n\nNúmero de tentativa(s): ${tentativas} de ${nivelMedio}`);

    if (numeroSecreto > chute) {
       alert(`o número secreto é maior ${chute}.`);
} else {
      alert(`o numero secreto é menor ${chute}.`);
}
}
    } else {
alert('Game Over: \nVocê perdeu!!!\n\nTente novamente.');
break;
    }
