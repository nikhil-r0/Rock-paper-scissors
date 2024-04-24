//To get Computer Choice
function getComputerChoice(){
    //Get a random number between 0 and 2
    choiceSeed = Math.floor(Math.random()*3);
    choice = '';
    //If 0 then Rock, if 1 then Paper, If 2 then Scissors
    if(choiceSeed === 0){
        choice = 'Rock';
    }
    else if(choiceSeed === 1){
        choice = 'Paper';
    }
    else if(choiceSeed === 2){
        choice = 'Sciccors';
    }
    return choice;
}
