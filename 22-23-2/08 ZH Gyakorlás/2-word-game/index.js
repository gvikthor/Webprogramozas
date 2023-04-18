// ========= Utility functions =========
function random(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

// ========= Selected elements =========
const inputGuess = document.querySelector("#inputGuess");
const form = document.querySelector("form");
const tableGuesses = document.querySelector("#guesses");
const divTheWord = document.querySelector("details > div");
const spanError = document.querySelector("#error");
const btnGuess = document.querySelector("form > button");
const divEndOfGame = document.querySelector("#end-of-game");
const btnRestart = document.querySelector("#restart");

// ========= Solution =========
const WORD = wordList[random(0, wordList.length)]
divTheWord.innerText = WORD

let GUESS = ''
function sendGuess(){
  GUESS = inputGuess.value // inputnak nem innerText-je van!
  if(GUESS.length != 5){
    spanError.innerText = 'The length of the word is not 5!'
    return
  }
  if(!wordList.some(word => word == GUESS)){
    spanError.innerText = 'The word is not considered acceptable!'
    return
  }
  spanError.innerText = ''

  let amountOfMatchingCharacters = 0
  //python: for(i in range(0,5))
  for(let i = 0; i < 5; i++){
    if(GUESS[i] == WORD[i]) amountOfMatchingCharacters++
  }
  console.log(amountOfMatchingCharacters)

  let styleClass = ''
  if(GUESS == WORD){
    styleClass = 'correct'
    divEndOfGame.removeAttribute('hidden')
  }
  tableGuesses.innerHTML = `<tr class="${styleClass}"><td>${GUESS}</td><td>${amountOfMatchingCharacters}</td></tr>` + tableGuesses.innerHTML
}
inputGuess.addEventListener('keydown', event => {
  if(event.key == 'Enter'){
    event.preventDefault()
    sendGuess()
  }
})
btnGuess.addEventListener('click', event => {
  event.preventDefault()
  sendGuess()
})

btnRestart.addEventListener('click', () => {
  location.reload()
})