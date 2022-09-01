let playerScore = 0;
let computerScore = 0;
const botones = document.querySelectorAll('input');

console.log(botones);

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) return 'Piedra';
    else if (randomNumber === 1) return 'Papel';
    else return 'Tijera';
};

const singleRound = (playerSelection, computerSelection) => {
    console.clear();
    console.log(`Jugador: ${playerSelection}  Computadora: ${computerSelection}`);
    if (playerSelection === computerSelection) {
        console.log(`Jugador: ${playerScore}  Computadora: ${computerScore}`);
        return 'Empate!'
    }
    //Eventos ganadores
    else if (playerSelection === 'Piedra' && computerSelection === 'Tijera' ||
             playerSelection === 'Tijera' && computerSelection === 'Papel' ||
             playerSelection === 'Papel' && computerSelection === 'Piedra') {
                 playerScore += 1;
                 if(playerScore === 5) {
                    desabilitarBotones();
                    return `Ganaste la partida contra una computadora!`;
                 }
                 console.log(`Jugador: ${playerScore}  Computadora: ${computerScore}`);
        return `Ganaste! ${playerSelection} le gana a ${computerSelection}`;
    }
    
    //Eventos perdedores
    else {
        if(computerScore === 5) {
            desabilitarBotones();
        return `Perdiste la partida contra una computadora!`;
        }
        computerScore += 1;
        console.log(`Jugador: ${playerScore}  Computadora: ${computerScore}`);
        return `Perdiste! ${playerSelection} pierde contra ${computerSelection}`;
    }

}



botones.forEach(boton => {
    boton.addEventListener('click', () => {
        console.log(singleRound(boton.value, getComputerChoice()));
    })
})

const desabilitarBotones = () => {
    botones.forEach(boton => {
        boton.disabled = true;
    })
}