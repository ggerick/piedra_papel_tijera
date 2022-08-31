let playerScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) return 'Piedra';
    else if (randomNumber === 1) return 'Papel';
    else return 'Tijera';
};

const singleRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) return 'Empate!';
    //Eventos ganadores
    else if (playerSelection === 'Piedra' && computerSelection === 'Tijera' ||
             playerSelection === 'Tijera' && computerSelection === 'Papel' ||
             playerSelection === 'Papel' && computerSelection === 'Piedra') {
        return `Ganaste! ${playerSelection} le gana a ${computerSelection}`;
    }
    
    //Eventos perdedores
    else if (playerSelection === 'Tijera' && computerSelection === 'Piedra') {
        return 'Perdiste! Tijera pierde contra Piedra';
    }
    else if (playerSelection === 'Papel' && computerSelection === 'Tijera') {
        return 'Perdiste! Papel pierde contra Tijera';
    }
    else if (playerSelection === 'Piedra' && computerSelection === 'Papel') {
        return 'Perdiste! Piedra pierde contra Papel';
    }
    //return [playerSelection, computerSelection];
}

    const game = () => {
    
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt('Qué elijes?');
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        const computerSelection = getComputerChoice();
        console.log(singleRound(playerSelection,computerSelection));

    }
};

game();

// const playerSelection =  'Piedra';




