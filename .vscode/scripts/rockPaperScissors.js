let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScore();  

let computerMove = '';
let result = '';

function playGame(playerMove){

if(playerMove === 'scissors'){

  if (computerMove === 'rock'){
    result = 'You lose.';
  } else if (computerMove === 'paper'){
    result = 'You win.';
  } else if (computerMove === 'scissors'){
    result = 'Tie.';
  }

} else if (playerMove === 'paper'){

    if (computerMove === 'rock'){
      result = 'You win.';
    } else if (computerMove === 'paper'){
      result = 'Tie.';
    } else if (computerMove === 'scissors'){
      result = 'You lose.';
  }

} else if (playerMove === 'rock'){

    if (computerMove === 'rock'){
      result = 'Tie.';
    }   else if (computerMove === 'paper'){
     result = 'You lose.';
    }   else if (computerMove === 'scissors'){
      result = 'You win.';
    }
    
} 

if (result === "You win."){
  score.wins++;
} else if(result === "You lose."){
  score.losses++;
} else if(result === "Tie."){
  score.ties++; 
}

localStorage.setItem('score', JSON.stringify(score));


document.querySelector('.yourResult').innerHTML = result;
document.querySelector('.move').innerHTML = `You: <img src="images/${playerMove}-memoji.jpg" class="moveIcon"> - Computer: <img src="images/${computerMove}-memoji.jpg" class="moveIcon">`;
updateScore(); 


}

function pickComputerMove(){
let randomNum = Math.random ();

if(randomNum >= 0 && randomNum < 1/3){
  computerMove = 'rock';
} else if (randomNum >= 1/3 && randomNum < 2/3){
  computerMove = 'paper';
} else if (randomNum >= 2/3 && randomNum < 1){
  computerMove = 'scissors';
}

console.log(computerMove);
}

function updateScore(){
document.querySelector('.jsScore').innerHTML = "Wins: "+score.wins+", Losses: "+score.losses+", Ties: "+score.ties; 
}