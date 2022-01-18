//  <--- add needed variables --->
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.getElementsByClassName("btn__reset");
const overlay = document.getElementById('overlay');

let missed = 0;

const ul = document.querySelector('#phrase ul');
// <--- Array named Phrases --->
const phrases =  [
    'Remember why you started',
    'Do what you love',
    'Get better every single day',
    'It is the will not the skill',
    'Trust the process'
];

//  <---listens for the start of the game button to be pressed--->
startGame[0].addEventListener('click', () => {
    overlay.style.display = 'none';
});


//  <--- return a random phrase from an array --->
function getRandomPhraseAsArray(phrases){
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    const phraseSplit = randomPhrase.split('');
    return phraseSplit;
};

const getRandomPhrase = getRandomPhraseAsArray(phrases);
// const getRandomPhraseAsArray = arr => {}
//console.log(getRandomPhrase)


// <--- add letters of a string to the display --->
function addPhraseToDisplay(phrase){
    for (let i = 0; i < phrase.length; i ++){
        const list = document.createElement('li');
        ul.appendChild(list);

        if (phrase[i] === ' '){
            list.className = 'space';
        } else {
            list.className = 'letter'
        }
    }
}
const phraseDisplay = addPhraseToDisplay(getRandomPhrase);
// const addPhraseToDisplay = arr => {}
// console.log (getRandomPhrase)





// <--- checks if a letter is in the phrase --->
function checkLetter (clicked) {
    const letters = document.querySelectorAll('.letter');
    let matchingLetters = null;

    for (i = 0; i < letters.length; i++) {
        if (clicked.textcontent === letterList[i].textcontent) {
            letters[i].classList.add('show');
            letters[i].style.transition = '0.5 ease-in-out';
            matchingLetters = true;
        }
    }
    return matchingLetters;
}
// const checkLetter = button => {}


// //checks if the game has been won or lost
// const checkWin = () => {

// }

// //listen for the onscreen keyboard to be clicked
// qwerty.addEventListener('click', e => {

// });
