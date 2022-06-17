// creating the three possible outputs for the game 
const options = ['ROCK', 'PAPER', 'SCISSORS'];

// randomly returning one of the possible options to be the computer option
let gamePlay =  opt => 
{
    return options[Math.floor(Math.random() * 3)]; 
}
const computerOPtion = gamePlay(options);
// comparing players option to computers option to declare the winner
let battle = (playerOption, compOption) => 
{
    if (playerWin())
    {
        return `You win! ${playerOption} beats ${compOption}`;
    }
    else
    {
        return `you lose! ${compOption} beats ${playerOption}`;
    }
}

// creating five rounds if play
let playRound = () => 
{
    for (i = 0; i < 5; i++)
    {
        battle(playerOPtion, computerOPtion);
    }
}