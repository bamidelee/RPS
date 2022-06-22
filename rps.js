function visible()
{
    document.documentElement.style.setProperty('--visibility', 'visible');
}
setTimeout(visible, 4000);
const opts = document.querySelectorAll('.flex img');
const options = Array.from(opts);

// randomly returning one of the possible options to be the computer option
let gamePlay =  opt => 
{
    return opt[Math.floor(Math.random() * 3)]; 
}


// comparing players option to computers option to declare the winner
options.forEach(option =>
    {
        option.addEventListener('click', showWinner);
    });

    function showWinner(e)
    {
        let computerOPtion = gamePlay(options);
        const compImage = document. querySelector('.comp');
        let src = computerOPtion.getAttribute('src');
        compImage.setAttribute('src', src);
        let result = document.querySelector('.result');
        
       
        if ( computerOPtion == options[0] && this == options[1])
        {
            result.textContent = `computer wins scissors beats paper`;
        }
        else if (computerOPtion == options[1] && this == options[2])
        {
            result.textContent = `computer wins paper beats rock`;
        }
        else if (computerOPtion == options[2] && this == options[0])
        {
            result.textContent = `computer wins rock beats scissors`;
        }
        else if ( this == options[0] && computerOPtion == options[1])
        {
            result.textContent = `you win scissors beats paper`;
        }
        else if (this == options[1] && computerOPtion == options[2])
        {
            result.textContent = `you win paper beats rock`;
        }
        else if (this == options[2] && computerOPtion == options[0])
        {
            result.textContent = `you win rock beats scissors`;
        }
        else{
            result.textContent = 'tie';
        }
       
      
        
       
    }
   