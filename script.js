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

let round = 0;

let humanScore = 0;
let computerScore = 0;
//Play a single round
function playRound(humanChoice,computerChoice){
    //Check the choices to identify who wins or if its a tie and print appropriate messages
    if(humanChoice == 'Rock'){
        if(computerChoice == 'Rock'){
            anounce.textContent = 'Its a Draw!';
        }
        else if(computerChoice == 'Paper'){
            anounce.textContent = 'You Lose! Paper beats Rock!';
            computerScore++;
        }
        if(computerChoice == 'Scissors'){
            anounce.textContent = 'You Win! Rock beats Scissors!';
            humanScore++;
        }
    }
    else if(humanChoice == 'Paper'){
        if(computerChoice == 'Rock'){
            anounce.textContent = 'You Win! Paper beats Rock!';
            humanScore++;
        }
        else if(computerChoice == 'Paper'){
            anounce.textContent = 'Its a Draw!';
        }
        if(computerChoice == 'Scissors'){
            anounce.textContent = 'You Lose! Scissors beat Paper!';
            computerScore++;
        }
    }
    else if(humanChoice == 'Scissors'){
        if(computerChoice == 'Rock'){
            anounce.textContent = 'You Lose! Rock beats Scissors!';
            computerScore++;
        }
        else if(computerChoice == 'Paper'){
            anounce.textContent = 'You Win! Scissors beat Paper!';
            humanScore++;
        }
        if(computerChoice == 'Scissors'){
            anounce.textContent = 'Its a Draw!';
        }
    }
    humanScoreNode.textContent = humanScore;
    computerScoreNode.textContent = computerScore;
}

let reset = document.querySelector('#reset');
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissor = document.querySelector('#scissor');
let anounce = document.querySelector('#anounce');
image1 = document.querySelector('#humanHand');
image2 = document.querySelector('#computerHand');
rock.addEventListener('click',function (){
    image1.src = 'images/rock.jpeg';
    image2.src = 'images/rockReverse.png';
    computerChoice = getComputerChoice();
    playRound('Rock',computerChoice);
    animate(image1,false);
    animate(image2,true);
    setTimeout(function (){
        animate(image1,false); 
        animate(image2,true);   
    },1000);
});
paper.addEventListener('click',function (){
    computerChoice = getComputerChoice();
    playRound('Paper',computerChoice);
    image1.src = 'images/rock.jpeg';
    image2.src = 'images/rockReverse.png';
    animate(image1,false);
    animate(image2,true);
    setTimeout(function (){
        animate(image1,false); 
        animate(image2,true);   
    },1000);
    setTimeout(function(){
        image1.src = 'images/paper.jpeg';
        if(computerChoice == 'Paper'){
            image2.src = 'images/paper.jpeg';
        }
        else if(computerChoice == 'Scissors'){
            image2.src = 'images/scissor.jpeg';
        }
    },1900);
});
scissor.addEventListener('click',function (){
    computerChoice = getComputerChoice();
    playRound('Scissors',computerChoice);
    image1.src = 'images/rock.jpeg';
    image2.src = 'images/rockReverse.png';
    animate(image1,false);
    animate(image2,true);
    setTimeout(function (){
        animate(image1,false); 
        animate(image2,true);   
    },1000);
    setTimeout(function(){
        image1.src = 'images/scissor.jpeg';
        if(computerChoice == 'Paper'){
            image2.src = 'images/paper.jpeg';
        }
        else if(computerChoice == 'Scissors'){
            image2.src = 'images/scissor.jpeg';
        }
    },1900);
});
let humanScoreNode = document.querySelector('#humanScore')
let computerScoreNode = document.querySelector('#computerScore')

function animate(image,reverse){
    const animationTime = 900;
    let start = Date.now();
    let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        if(timePassed >= animationTime){
            clearInterval(timer);
            return;
        }
    if (!reverse){
        image.style.transformOrigin = 'bottom left';
        swing(timePassed,image);
    }
    else{
        image.style.transformOrigin = 'bottom right';
        swing2(timePassed,image);
    }
    },20);
}

function swing(timePassed,image){
    let deg = 0;
    if(timePassed<450){
        deg = -timePassed/5;
    }
    else if(timePassed < 900){
        deg = timePassed/10 - 90;
    }
    image.style.transform = 'rotate('+deg+'deg)';
}

function swing2(timePassed,image){
    let deg = 0;
    if(timePassed<450){
        deg = timePassed/5;
    }
    else if(timePassed < 900){
        deg = 90-timePassed/10;
    }
    image.style.transform = 'rotate('+deg+'deg)';
}

function roundNumber(){
    if(humanScore == 5){
        anounce.textContent = 'You Win!';
        anounce.dispatchEvent('gameOver');
    }
    else if(computerScore == 5){
        anounce.textContent = 'You Lose!';
    }
    else{
        anounce.textContent = 'Round'+round;
        anounce.dispatchEvent('gameOver'); 
    }
}

const event = new CustomEvent('gameOver');
