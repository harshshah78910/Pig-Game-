/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, activePlayer, roundScore;




init();


function onButtonRoll()
{
   var diceValue=Math.floor(Math.random() * 6) + 1;
   document.querySelector('#current-' + activePlayer).textContent = diceValue;
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + diceValue + '.png';
    
    if(diceValue !== 1)
       {
          roundScore += diceValue ;
          document.querySelector('#current-' + activePlayer).textContent = roundScore;
       }
    else
        {
            nextPlayer();  
        }
    
}

document.querySelector('.btn-roll').addEventListener('click',onButtonRoll);

document.querySelector('.btn-hold').addEventListener('click',function(){
    
    scores[activePlayer] += roundScore;
    document.getElementById('score-' +activePlayer).textContent=scores[activePlayer];
    
    if(scores[activePlayer] >= 20)
       {
       document.getElementById('name-' + activePlayer).textContent= 'WINNER!';
       document.querySelector('.dice').style.display='none';
           document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
           document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
       }
    else{
        nextPlayer();
        
    }
    
    
    
});

document.querySelector('.btn-new').addEventListener('click',init);

function init()
{
   scores=[0,0];
activePlayer=0;
roundScore=0;
    // Initializinf and setting the values
document.querySelector('.dice').style.display='none'; // tp disable the the dice image from CSS

document.getElementById('score-0').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-1').textContent = 0;
    
    document.getElementById('name-1').textContent= 'Player 2';
    document.getElementById('name-0').textContent= 'Player 1';
    
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('active');
    
    document.querySelector('.player-0-panel').classList.add('active');
 
}

function nextPlayer()
{
    roundScore=0;
            activePlayer === 0 ? activePlayer=1 : activePlayer=0;
            
            document.getElementById('current-1').textContent = 0;
            document.getElementById('current-0').textContent = 0;
            
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            
            document.querySelector('.dice').style.display='none';
}


//document.querySelector('#current-' + activePlayer).textContent = diceValue;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + diceValue + '</em>'; How to set HTML content