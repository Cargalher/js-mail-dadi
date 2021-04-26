// *************** dice game NOT USING ARRAY ***************
/*
// random number_Computer
var computerDice = Math.floor(Math.random() * 6) + 1;
console.log("The computer rolls a "+ computerDice);

// random number_User
var userDice = Math.floor(Math.random() * 6) + 1;
console.log("The user rolls a "+ userDice);

if (userDice > computerDice) {
    console.log("You roll a " + userDice + " and the computer rolls a " + computerDice + ". You Win!!" );
    document.getElementById('dices').innerHTML= "You roll a " + userDice + " and the computer rolls a " + computerDice + ". You Win!!" ;
} else if (userDice < computerDice){
    console.log("You roll a " + userDice + " and the computer rolls a " + computerDice + ". You Lose!!" );
    document.getElementById('dices').innerHTML= "You roll a " + userDice + " and the computer rolls a " + computerDice + ". You Lose!!" ;
} else if (userDice === computerDice){
    console.log("You roll a " + userDice + " and the computer rolls a " + computerDice + ". This is a Tie!!" );
    document.getElementById('dices').innerHTML= "You roll a " + userDice + " and the computer rolls a " + computerDice + ". This is a Tie!!" ;
};
*/


// *************** dice game USING ARRAY ***************
// numbers in a dice
var diceRoll = [1, 2, 3, 4, 5, 6];
console.log(diceRoll);
// random number_Computer
var computerDice = diceRoll[Math.floor(Math.random() * 6)];
console.log("The computer rolls a "+ computerDice);
// random number_User
var userDice = diceRoll[Math.floor(Math.random() * 6)];
console.log("The user rolls a "+ userDice);