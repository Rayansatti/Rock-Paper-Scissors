const max = 3;


/*function getComputerChoice(max){
    //returns a random number between 1-3
    function getRandom(){
        return Math.floor(Math.random() * 3) + 1;
    }
    console.log(getRandom())
}
getComputerChoice(max);*/

function getComputerChoice(max){
    
       const randomChoice =  Math.floor(Math.random() * max.length);

       const choice = max[randomChoice];

       return choice;
    
}

const array = ['Rock' , 'Paper', 'Scissors'];

const result = getComputerChoice(array);

console.log(result)



