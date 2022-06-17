// creating the three possible outputs for the game 
const options = ['ROCK', 'PAPER', 'SCISSORS'];
let playerOPtion;
let computerScore = 0;
let playerScore = 0;
let roundsCounter = 0;

// randomly returning one of the possible options to be the computer option
let gamePlay =  opt => 
{
    return options[Math.floor(Math.random() * 3)]; 
}
const computerOPtion = gamePlay(options);

// comparing players option to computers option to declare the winner
let playerWin = () => 
{
    if (playerOPtion == 'ROCK' && computerOPtion == 'SCISSORS')
    {
        return true;
    }
    else if (playerOption == 'SCISSORS' && computerOPtion == 'PAPER')
    {
        return true;
    }
    else if (playerOPtion == 'PAPER' && computerOPtion == 'ROCK')
    {
        return true;
    }
    else
    {
        return false;
    }
}
// incresing scores
let battle = (playerOpt, compOpt) => 
{
    if (playerWin())
    {
        playerScore++;
    }
    else
    {
        computerScore++;
    }
}
// setting all counters to default value
let restartGame = () =>
{
    roundsCounter = 0;
    playerScore = 0;
    computerScore = 0;
}

// creating five rounds if play
let newGame = () => 
{
    battle(playerOPtion, computerOPtion);
    roundsCounter++;
    if (roundsCounter == 5 && playerScore > computerScore)
    {
        return 'YOU WIN'
    }
    else if (roundsCounter == 5 && playerScore < computerScore)
    {
        return 'YOU LOSE'
    }
    restartGame();

}


