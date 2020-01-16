//Add event listener to letter buttons and call play function inside
window.onload = function () {
	var letters = document.getElementById("letters").children
	for (letter of letters) {
		letter.addEventListener("click", function (e) {
			e.target.disabled = 'true'
			play(this.innerText)

		})
	}
}

//Array of words
var words = ['SWIMSUIT', 'POPSICLE', 'BEACHBALL', 'SANDCASTLE', 'SUP', 'SANDALS', 'BIKING', 'SWIMMING', 'TANNING', 'SHORTS', 'VOLLEYBALL', 'RIBS', 'HAMBURGERS', 'SMORES', 'GOGGLES', 'SNORKEL', 'SUNGLASSES']

//Array of categories
var categories = ['Beachwear', 'Actvity', 'Food']

//Get random word + category
var random = Math.random()
var word = words[Math.floor(random * words.length)]
var hint = categories[Math.floor(random * words.length)]

//Array of answers
var answerArray = []

//Replace letter with blank at each index
for (let i = 0; i < word.length; i++) {
	answerArray[i] = "_"
}

//Get elements by id
function id(str) {
	return document.getElementById(str)
}

//Keys press
function words() {
	var words = document.getElementById("");
}

//Declare variables for elements
var guessWord = id('guessWord')
var category = id('category')
var winLose = id('winLose')
var triesLeft = id('triesLeft')

//Show answer array and hint
guessWord.innerHTML = answerArray.join(" ")
category.innerHTML = "<strong>Category:</strong><br>" + hint

//Keep track of letters that remain to be guessed
var remainingLetters = word.length
//Maximum amount of tries
var maxTries = 10

//Show amount of tries 
triesLeft.innerHTML = "<strong>Tries Left:</strong><br>" + maxTries

function play(letter) {
	let found = false
	// The Game Loop
	if (remainingLetters > 0) {
		//Update inner HTML with answer
		guessWord.innerTextHTML = answerArray
		//Guess equals button letter
		var guess = letter
		for (let j = 0; j < word.length; j++) {
			if (word[j] === guess) {
				answerArray[j] = guess
				remainingLetters--
				found = true
			}
			// *WIN* Reload
			if (remainingLetters === 0) {
				winLose.innerHTML = "YOU GOT IT!"
				setTimeout(function () {
					window.location.reload()
				}, 2000)
			}
		}
	}
	//Decrease number of max tries if chosen letter is incorrect
	if (!found) {
		maxTries--
	}
	// *LOSE* Reload
	if (maxTries === 0) {
		winLose.innerHTML = "SORRY, YOU LOST :( BETTER LUCK NEXT TIME"
		setTimeout(function () {
			window.location.reload()
		}, 2000)
	}

	triesLeft.innerHTML = "<strong>Tries Left:</strong><br>" + maxTries
	guessWord.innerHTML = answerArray.join(" ")
}


