// random number_Computer
var computerDice = Math.floor(Math.random() * 6) + 1;
console.log("The computer rolls a "+ computerDice);

// random number_User
var userDice = Math.floor(Math.random() * 6) + 1;
console.log("The user rolls a "+ userDice);

if (userDice > computerDice) {
console.log("You roll a " + userDice + " the computer rolls a " + computerDice + ". You Win!!" );
} else if (userDice < computerDice){
    console.log("You roll a " + userDice + " the computer rolls a " + computerDice + ". You Lose!!" );
} else if (userDice === computerDice){
    console.log("You roll a " + userDice + " the computer rolls a " + computerDice + ". This is a Tie!!" );
};