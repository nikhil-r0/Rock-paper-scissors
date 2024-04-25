//To get Computer Choice
function getComputerChoice(){
    //Get a random number between 0 and 2
    let choiceSeed = Math.floor(Math.random()*3);
    let choice = '';
    //If 0 then Rock, if 1 then Paper, If 2 then Scissors
    if(choiceSeed === 0){
        choice = 'Rock';
    }
    else if(choiceSeed === 1){
        choice = 'Paper';
    }
    else if(choiceSeed === 2){
        choice = 'Scissors';
    }
    return choice;
}

//To get Human Choice
function getHumanChoice(){
//Use prompt to get a text input, either rock, paper or scissors
let choice = prompt('Enter Rock, Paper or Scissors:');
//convert it to lowercase so that its easier to compare
let lowerChoice = choice.toLowerCase();
//Return the value
if (lowerChoice === 'rock'){
    return 'Rock';
}
else if(lowerChoice === 'paper'){
    return 'Paper';
}
else if(lowerChoice === 'scissors'){
    return 'Scissors';
}
else {
    return null;
}
}

let humanScore = 0;
let computerScore = 0;
//Play a single round
function playRound(humanChoice,computerChoice){
    //Check the choices to identify who wins or if its a tie and print appropriate messages
    if(humanChoice == 'Rock'){
        if(computerChoice == 'Rock'){
            console.log('Its a Draw!');
        }
        else if(computerChoice == 'Paper'){
            console.log('You Lose! Paper beats Rock!');
            computerScore++;
        }
        if(computerChoice == 'Scissors'){
            console.log('You Win! Rock beats Scissors!');
            humanScore++;
        }
    }
    else if(humanChoice == 'Paper'){
        if(computerChoice == 'Rock'){
            console.log('You Win! Paper beats Rock!');
            humanScore++;
        }
        else if(computerChoice == 'Paper'){
            console.log('Its a Draw!');
        }
        if(computerChoice == 'Scissors'){
            console.log('You Lose! Scissors beat Paper!');
            computerScore++;
        }
    }
    else if(humanChoice == 'Scissors'){
        if(computerChoice == 'Rock'){
            console.log('You Lose! Rock beats Scissors!');
            computerScore++;
        }
        else if(computerChoice == 'Paper'){
            console.log('You Win! Scissors beat Paper!');
            humanScore++;
        }
        if(computerChoice == 'Scissors'){
            console.log('Its a Draw!');
        }
    }
}

function playGame(){
    for(i = 0; i < 5;i++){
        //Get Human and Computer Choice
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
    }
    console.log('Your Score: ' + humanScore + '\nComputer Score: '+ computerScore);
    if (humanScore > computerScore){
        console.log('Congratulations!! You win!');
    }
    else if (computerScore > humanScore){
        console.log('You lose!! Better luck next time.');
    }
    else{
        console.log("It's a draw!");
    }
}

playGame();

