
const choices =['rock','paper','scissors'];
const computerDisplay=document.getElementById('computerDisplay');
const playerDisplay=document.getElementById('playerDisplay');
const resultDisplay=document.getElementById('resultDisplay');
const playerScoreDisplay=document.getElementById('playerScoreDisplay');
const computerScoreDisplay=document.getElementById('computerScoreDisplay');

let playerScore=0;
let computerScore=0;
function playGame(playerChoice){
    const computerChoice=choices[Math.floor(Math.random()*3)];

    let  result='';
    if(playerChoice===computerChoice){
        result="IT'S A TIE!";
    }
    else if( playerChoice === "rock" && computerChoice === "scissors" ||
    playerChoice === "scissors" && computerChoice === "paper" ||
    playerChoice === "paper" && computerChoice === "rock")
    {
        result='YOU WIN!';
        playerScore++;
    }
    else{
        result="YOU LOSE!";
        computerScore++;
    }
    playerDisplay.textContent=`PLAYER: ${playerChoice}`;
    computerDisplay.textContent=`COMPUTER: ${computerChoice}`;
    computerScoreDisplay.textContent=computerScore;
    playerScoreDisplay.textContent=playerScore;
    resultDisplay.textContent=result;


    resultDisplay.classList.remove('greenText','redText');
    switch(result){
        case 'YOU WIN!':
            resultDisplay.classList.add('greenText');
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add('redText');
    }
}