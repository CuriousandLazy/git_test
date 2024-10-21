function getComputerChoice(choices){

    return choices[Math.floor(Math.random()*choices.length)];
}
function getHumanChoice(choices){
    check = prompt(`Input the order of your choice between;` + choices);
    return choices[check-1];
}

let humanScore = 0;
let computerScore = 0;
const choices = ["rock","paper","scissors"];

function playRound(choices, humanChoice, computerChoice){
    if(getHumanChoice(choices)== getComputerChoice(choices)){
        console.log(`Its a draw`)

    }
    else if()
}