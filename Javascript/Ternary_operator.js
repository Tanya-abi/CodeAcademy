//We can use a ternary operator to perform the same functionality:

let isLocked = false;

// if (isLocked) {
//   console.log('You will need a key to open the door.');
// } else {
//   console.log('You will not need a key to open the door.');
// }

isLocked ? console.log('You will need a key to the door. ')
: console.log('You will not need a key to the ');


let isCorrect = true;

// if (isCorrect) {
//   console.log('Correct!');
// } else {
//   console.log('Incorrect!');
// }

isCorrect ? console.log('Correct') :
console.log('Incorrect');

let favoritePhrase = 'Love That!';

// if (favoritePhrase === 'Love That!') {
//   console.log('I love that!');
// } else {
//   console.log("I don't love that!");
// }

favoritePhrase ? console.log('I love that') :
console.log("I don't love that");


// Lets do a code that determine if someone is of the legal drinking age:

function drinkingAge() {

    let name = prompt("What is your name?")
    defaultName = name || "Stranger";

    let age = prompt("How old are you?");
    
    const minAge = 18;

    age >= minAge ? alert(`Yey ${defaultName}!!!, you are of drinking age.`) :
    alert(`"Oh NOO!!! ${defaultName}, You are underage, no alchol for you."`);
}

const myButton = document.getElementById("button");

myButton.addEventListener('click', drinkingAge);