const quoteElement = document.querySelector('footer blockquote')
const quoteArray = [
  '"The price of discipline is always less than the pain of regret. - Nido Qubein"',
  '"To me, ‘busy’ implies that the person is out of control of their life. Derek Sivers"',
  '"No man can serve two masters. Your life is shaped by the end you live for. You are made in the image of what you desire. - Thomas Merton, Thoughts in Solitude"',
  '"It is our responsibilities, not ourselves, that we should take seriously. -Peter Ustinov"',
  '"The man who views the world at 50 the same as he did at 20 has wasted 30 years of his life."',
  '"Death is nothing to us, since when we are, death has not come, and when death has come, we are not. - Epicurus"',
  '"We have two lives, and the second begins when we realize we only have one. - Confucius"',
  '"Perfection is finally attained not when there is no longer anything to add, but when there is no longer anything to take away. - Antoine de Saint-Exupéry"',
  '"If someone could only see my actions and not hear my words, what would they say are my priorities? - James Clear"',
  '"Happiness is like a butterfly: the more you chase it, the more it will evade you, but if you notice the other things around you, it will gently come and sit on your shoulder. - Henry David Thoreau"'
]
let randomNumber = getRandomInt()
let lastRandomNumber

// If there is something in localstorage, retrieve the random index number last used
if(localStorage) {
  lastRandomNumber = Number(localStorage.getItem('quote'))
} 

// Storage the recent random index number in localstorage
localStorage.setItem('quote', randomNumber)

function isQuoteTheSame() {
  // If the last random index number is not equals to the recent random index number
  if(lastRandomNumber !== randomNumber) {
    // Change the content of the element with the content of the array with index of the random number
    quoteElement.textContent = quoteArray[randomNumber]
  } else {
    // If the recent random number is equals to the last random number
    // get a new random number and run the function again untill the numbers are not equal
    randomNumber = getRandomInt()
    isQuoteTheSame()
  }
}

function getRandomInt() {
  return Math.floor(Math.random() * 10)
}

isQuoteTheSame()