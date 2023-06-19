let wins = 0;
let losses = 0;
let ties = 0;

let rounds = prompt("How many rounds would you like to play?");

rounds = parseInt(rounds, 10);

for(let i = 0; i < rounds; i++){
    let userChoice = prompt("Please enter r, p or s for rock, paper, or scissors");
    let computerChoice = Math.floor(Math.random() * 3);

    if(userChoice === "r"){
        if(computerChoice === 0){
            alert("It's a tie!");
            ties++;
        } else if(computerChoice === 1){
            alert("You lost!");
            losses++;
        } else {
            alert("You won!");
            wins++;
        }
    } else if(userChoice === "p"){
        if(computerChoice === 0){
            alert("You won!");
            wins++;
        } else if(computerChoice === 1){
            alert("It's a tie!");
            ties++;
        } else {
            alert("You lost!");
            losses++;
        }
    } else if(userChoice === "s"){
        if(computerChoice === 0){
            alert("You lost!");
            losses++;
        } else if(computerChoice === 1){
            alert("You won!");
            wins++;
        } else {
            alert("It's a tie!");
            ties++;
        }
    }
}

alert("You won " + wins + " times, tied " + ties + " times, and lost " + losses + " times.");
