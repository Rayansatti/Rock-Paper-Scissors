// returns a random element from a given array
function getComputerChoice(max){
        //picks a random position from the given array
       const randomChoice =  Math.floor(Math.random() * max.length);

       const choice = max[randomChoice];

       return choice;
    
}

const array = ['rock' , 'paper', 'scissors'];

const result = getComputerChoice(array);

//console.log(result)

//gets input from the user and converts it to lower case


function reprompt(){
        playerSelection;
        getComputerChoice(array);

}


//plays round in the game 
//it takes 1 argument the result from getcomputerchoice(array)
//compares between them and return a value

function playRound(result){
        playerSelection = prompt("Enter your choice!").toLowerCase();

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

//array to keep rounds results
let rounds = [];

//it repeats game rounds for 5 times
function playGame(){
       do{
        rounds.push(playRound(result));
       }while(rounds.length < 5);
}
 playGame();
console.log(rounds);

function win(rounds){
        let count = 0;
        let winnerKey = 'you win!';
        

        for(target of rounds){
               
                if(target == winnerKey){
                        count++;
                }
               
        };

        if(count > 2){
                console.log('You are the winner!');
        }else{
                console.log('You are the winner!');
        }

        console.log(count); 
      
}

win(rounds);





