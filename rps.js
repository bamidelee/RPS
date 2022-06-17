// creating the three possible outputs for the game 
const options = ['ROCK', 'PAPER', 'SCISSORS'];
// randomly returning one of the possible options 
let gamePlay =  opt => 
{
    return options[Math.floor(Math.random() * 3)];
  
}
gamePlay(options);