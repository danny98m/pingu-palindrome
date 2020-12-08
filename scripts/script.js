const state = {
  isPalindrome: false
}

// images to use when we get a palindrome
const pinguPicsTrue = [
  {url: 'pingu-dance.webp', alt: 'pingu dancing'},
  {url: 'pingu-clap.webp', alt: 'pingu clapping'},
  {url: 'pingu-vibe.gif', alt: 'pingu vibing'}
]

// images to use when we do not get a palindrome
const pinguPicsFalse = [
  {url: 'pingu-fish.webp', alt: 'pingu attacked by fish'},
  {url: 'pingu-angry.webp', alt: 'pingu angry'},
  {url: 'pingu-scary.webp', alt: 'pingu being scary'}
]

// UI ELEMENTS
const inputField = document.querySelector("input[type='text']");
const results = document.querySelector("#results");
const image = document.querySelector('img');

inputField.addEventListener('keyup', (event)=> {
  // remove whitespace
  const inputTextStripped = event.target.value.replace(/\s+/g, '');

  // make lower case
  const cleanedInput = inputTextStripped.toLowerCase();
  
  // check if palindrome
  state.isPalindrome = checkPalindrome(cleanedInput);

  // if there is nothing in the input field
  if (inputTextStripped === '') {
    // set results to blank space and hide image
    results.classList = '';
    results.innerHTML = '&nbsp;'
    image.style.visibility = 'hidden';

  } else if (state.isPalindrome) {
    // display palindrome and pingu gif
    results.classList = 'true'
    results.textContent = 'Palindrome'

    // pick pingu gif
    const pinguGifNumber = Math.floor(Math.random() * pinguPicsTrue.length);
    image.src = `./img/${pinguPicsTrue[pinguGifNumber].url}`;
    image.alt = pinguPicsTrue[pinguGifNumber].alt;
    image.style.visibility = 'visible';

  } else {
    // display not palindrome and pingu gif
    results.classList = 'false'
    results.textContent = 'Not Palindrome'

    // pick pingu gif
    const pinguGifNumber = Math.floor(Math.random() * pinguPicsFalse.length);
    image.src = `./img/${pinguPicsFalse[pinguGifNumber].url}`;
    image.alt = pinguPicsFalse[pinguGifNumber].alt;
    image.style.visibility = 'visible';

  }
})

// function for checking palindrome
// will return a boolean 
function checkPalindrome(word) {
  for (let i = 0; i < Math.floor(word.length/2); i++) {
    if (word[i] !== word[word.length -i -1]) {
      return false;
    }
  }
  return true
}
