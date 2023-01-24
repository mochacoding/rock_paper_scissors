const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice(arr) {
	//get random index value this is a rounded down version of random value between 0,1 multiplied by the length of array (which is 4) rounding down is essential so that you don't get 4, an invalid index
	const randomIndex = Math.floor(Math.random() * arr.length);
	//get random item this then makes new variable where the array is given the random index value generated
	const item = arr[randomIndex];
	//return the choice
	return item;
}
//I was hoping the below code would make calling it easier. I never declare this, so maybe it's because the function is using it but I don't get why this works.
computerSelection = getComputerChoice(choices);
// console.log(computerSelection);

//I need to compare the input and the computer's choice, play a round
function playRound(playerSelection, computerSelection) {
	if (playerSelection === 'paper' && computerSelection === 'rock') {
		return 'You win! Paper beats rock';
	} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
		return 'You lose! Scissors beats paper';
	} else if (playerSelection === 'paper' && computerSelection === 'paper') {
		return 'You tied! You both chose paper';
	} else if (playerSelection === 'rock' && computerSelection === 'scissors') {
		return 'You win! Rock beats scissors';
	} else if (playerSelection === 'rock' && computerSelection === 'rock') {
		return 'You tied! You both chose rock';
	} else if (playerSelection === 'rock' && computerSelection === 'paper') {
		return 'You lose! Paper beats rock';
	} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
		return 'You win! Scissors beats paper';
	} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
		return 'You lose! Rock beats scissors';
	} else if (
		playerSelection === 'scissors' &&
		computerSelection === 'scissors'
	) {
		return 'You tied! You both chose scissors';
	} else return "Don't forget to make a selection";
}

function game() {
	// playerSelection = prompt('Choose your weapon!');
	computerSelection = getComputerChoice(choices);
	if (playerSelection === null) {
		console.log('Boo!');
	} else playerSelection = playerSelection.toLowerCase();
	console.log(playRound(playerSelection, computerSelection));
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
	playerSelection === 'rock';
	game();
});

// function game() {
// 	for (let i = 0; i < 5; i++) {
// 		playerSelection = prompt('Choose your weapon!');
// 		computerSelection = getComputerChoice(choices);
// 		// console.log(computerSelection);
// 		if (playerSelection === null) {
// 			console.log('Boo!');
// 			break;
// 		} else playerSelection = playerSelection.toLowerCase();
// 		// console.log(playerSelection);
// 		console.log(playRound(playerSelection, computerSelection));
// 	}
// }
// game();
