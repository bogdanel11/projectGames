
console.log('Hello World!')
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}


function getHumanChoice(){
    const choices = ["rock", "paper", "scissors"];
    let userChoice=window.prompt('Choose rock, paper or scissors').toLowerCase()
    while (!choices.includes(userChoice)) {
        userChoice = window.prompt("Invalid choice! Please choose rock, paper, or scissors").toLowerCase();
    }
    
    return userChoice;
}
let humanScore=0;
let computerScore=0;

function playRound(humanChoice,computerChoice){
    console.log(`You chose ${humanChoice}`)
    console.log(`Computer chose ${computerChoice}`)
            if(humanChoice===computerChoice){
                    console.log('ITS A TIE!')
            }
        else if(humanChoice==='paper'&& computerChoice==='rock'||
            humanChoice==='rock'&& computerChoice==='scissors'||
            humanChoice==='scissors'&& computerChoice==='paper'
        ){
            console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`)
                humanScore++;
                
        }else{
            console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`);
            computerScore++;
           
        }
}
    function playGame(){
       
        for(let round=1;round<=5;round++){
            console.log(`Round ${round}`)
        
        const humanSelection=getHumanChoice();
        const computerSelection=getComputerChoice();
        
        playRound(humanSelection,computerSelection)

        console.log(`Scores after Round ${round}: You-${humanScore} | Computer -${computerScore}`)
        }
        if(humanScore>computerScore){
            console.log('You won the game')
        }
        else if(humanScore<computerScore){
            console.log('You lost the game!')
            
        }
        else{
            console.log('ITS A TIE GAME!')
        }
    }
    playGame();