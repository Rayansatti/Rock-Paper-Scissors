// returns a random element from a given array
function getComputerChoice(max){
        //picks a random position from the given array
       const randomChoice =  Math.floor(Math.random() * max.length);

       const choice = max[randomChoice];

       return choice;
    
}

const array = ['Rock' , 'Paper', 'Scissors'];

const result = getComputerChoice(array);

console.log(result)

//gets input from the user and converts it to lower case
let playerSelection = prompt("Enter your choice!").toLowerCase();



