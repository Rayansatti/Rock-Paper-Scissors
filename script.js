// returns a random element from a given array
function getComputerChoice(max){
        //picks a random position from the given array
       const randomChoice =  Math.floor(Math.random() * max.length);

       const choice = max[randomChoice];

       return choice;
    
}

const array = ['rock' , 'paper', 'scissors'];

const result = getComputerChoice(array);

console.log(result)

//gets input from the user and converts it to lower case
let playerSelection = prompt("Enter your choice!").toLowerCase();


//plays round in the game 
//it takes 2 arguments the player selection and the result from getcomputerchoice(array)
//compares between them and return a value
function playRound(playerSelection, result){
        if (playerSelection === result){
                return("tie");
        }else if(playerSelection == "rock" && result == "paper"){
                return("computer wins!");
        }else if(playerSelection == "rock" && result == "scissors"){
                return ("you win!");
        }else if(playerSelection == "paper" && result == "rock"){
                return ("you win!");
        }else if(playerSelection == "paper" && result == "scissors"){
                return ("computer win!");
        }else if(playerSelection == "scissors" && result == "rock"){
                return ("computer win!");
        }else if(playerSelection == "scissors" && result == "paper"){
                return ("you win!");
        }

}

console.log(playRound(playerSelection, result))



