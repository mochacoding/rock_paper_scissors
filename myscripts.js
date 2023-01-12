//I am creating a console based game to play rock paper scissors
//the game will be played against the computer
//Below I am detailing how to solve this problem:

//I need to take an input for the user's choice of the three
//I need to randomize the computer's choice of the three
//I need to compare the input and the computer's choice
//I need to return the winner of the compare
//I need to display to the user who won the game

const choices = ['rock', 'paper', 'scissors'];

//this is just a trial
// let number = Math.random();
// console.log(number);
// let fNum = Math.floor(number);
// console.log(fNum);
// function trial(min, max) {
//     max = Math.ceil(max);
//     console.log(max);
//     min = Math.floor(min);
//     console.log(min);
//     newNum = (Math.random() * (max - min) + min);
//     return Math.floor(newNum);
// }
// let try1  = trial(1,10);
// console.log(try1);
//end trial

//I need to take an input for the user's choice of the three
//I need to randomize the computer's choice of the three
//function to get the random choice using an array
function getComputerChoice(arr) {
	//get random index value this is a rounded down version of random value between 0,1 multiplied by the length of array (which is 4) rounding down is essential so that you don't get 4, an invalid index
	const randomIndex = Math.floor(Math.random() * arr.length);
	//get random item this then makes new variable where the array is given the random index value generated
	const item = arr[randomIndex];
	//return the choice
	return item;
}
computer = getComputerChoice(choices);

//I need to compare the input and the computer's choice, play a round
function playRound(playerSelection, computerSelection) {
    let player = playerSelection;
    let computer = computerSelection;
    switch 
}
//I need to return the winner of the compare
//I need to display to the user who won the game
