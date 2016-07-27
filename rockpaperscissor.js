var userChoice = prompt("Do you choose rock, paper or scissors?");
console.log("You: " + userChoice);
var computerChoice = Math.random();

if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.66) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}; 

console.log("Computer: " + computerChoice);
var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return ("The result is a tie!");
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            console.log("Rock wins!");
        } else {
            console.log("Paper wins!");
        }
        
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            console.log("Paper wins!");
        } else {
            console.log("Scissors win!");
            
        } if (choice1 === "scissors") {
            if (choice2 === "rock") {
                console.log("Rock wins!");
            } else {
                console.log("Scissors win!");
            }
        }
     }
    if (userChoice !== "rock"||"paper"||"scissors") {
    alert(userChoice + " wasn't an option! Try again...");
    }
 };
 compare(userChoice, computerChoice);

//ADD ONS

//What if a user makes an inappropriate choice like 'dog'? How can we extend the function to handle that?

//What if players in the game could also choose Rope in this game?

//In this version, if both players make the same choice, the game returns a tie. What if the game didn't end there but instead asked both players for new choices?