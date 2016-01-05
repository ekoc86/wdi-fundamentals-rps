
function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (move === null) {
        move = getInput(); 
    }
    return move /* Your Expression */;
}



function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move === null ) {
        move = randomPlay()
    }  
    return move /* Your Expression */;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */ 

    
    if (playerMove === computerMove) {
        winner = "tie";
        alert("There is a tie");
    } else if (playerMove === 'rock') {
              if ( computerMove === 'paper') {
                  winner = 'computer'; 
                 } else {
                 winner = 'player'; 
                 }

    }else if (playerMove === 'scissors') {
              if ( computerMove === 'rock') {
                  winner = 'computer'; 
                   } else {
                   winner = 'player'; 
                   }
                   
    } else if (playerMove === 'paper'){
                  if ( computerMove === 'scissors') {
                  winner = 'computer'; 
                   } else {
                  winner = 'player'; 
                   }
    } else {
         alert("This is not correct entry");
    }
    return winner;
}




function playToFive() {
    
    console.log("Let's play Rock, Paper, Scissors");
    
    var playerWins = 0;
    var computerWins = 0;

    while ( playerWins < 5 && computerWins < 5 ) { 
        
        var pMove = getPlayerMove(getInput());
        var cMove = getComputerMove(randomPlay());
        
        
         if (getWinner(pMove,cMove) === 'player') {
           playerWins++;
           alert("Good Job!");
         } else if (getWinner(pMove,cMove) === 'computer'   ) {
           computerWins++;
           alert("Sorry, Computer hit.");
           }

    } 
    
    alert("Game is over; Player Score: " + playerWins   +" , Computer Score: "+ computerWins )
}

playToFive(); 

//     return [playerWins, computerWins];
    
//     // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
//     /* YOUR CODE HERE */
// 