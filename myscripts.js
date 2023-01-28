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

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return (display.textContent = `You tied! You both chose ${playerSelection}`);
	} else if (
		(playerSelection === 'paper' && computerSelection === 'rock') ||
		(playerSelection === 'rock' && computerSelection === 'scissors') ||
		(playerSelection === 'scissors' && computerSelection === 'paper')
	) {
		return (display.textContent = `You won! ${playerSelection} beats ${computerSelection}`);
	} else
		return (display.textContent = `You lost! ${computerSelection} beats ${playerSelection}`);
}

let playerScore = 0;
let computerScore = 0;

function game() {
	computerSelection = getComputerChoice(choices);
	//create a loop for playing a game to five and iterating results
	playRound(playerSelection, computerSelection);
	if (playerSelection === computerSelection) {
		return;
	} else if (
		(playerSelection === 'paper' && computerSelection === 'rock') ||
		(playerSelection === 'rock' && computerSelection === 'scissors') ||
		(playerSelection === 'scissors' && computerSelection === 'paper')
	) {
		playerScore += 1;
	} else computerScore += 1;

	if (playerScore === 5) {
		display.textContent = 'You win! Play again?';
		playerScore = 0;
		computerScore = 0;
	} else if (computerScore === 5) {
		display.textContent = 'You lose! Wanna try again?';
		playerScore = 0;
		computerScore = 0;
	}
	score.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
}

//querySelectors for the three buttons.
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
//eventListeners to play a game depending on the button selected
rock.addEventListener('click', () => {
	playerSelection = 'rock';
	game();
});
paper.addEventListener('click', () => {
	playerSelection = 'paper';
	game();
});
scissors.addEventListener('click', () => {
	playerSelection = 'scissors';
	game();
});

//create a div for displaying results
const display = document.createElement('div');
display.classList.add('display');
display.setAttribute('style', 'white-space: pre;');
display.textContent =
	'Play a game by clicking one of the buttons above!\r\nFirst to five wins!';
document.body.appendChild(display);

//create a div for displaying a running total
const score = document.createElement('div');
score.classList.add('score');
score.textContent = '';
document.body.appendChild(score);




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
