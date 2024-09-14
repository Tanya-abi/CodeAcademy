/*Truthy and falsy evaluations open a world of short-hand possibilities!
This code is going to check if the user has entered their name, if not it will 
enter the set default string
*/

let name = 'Tanya'; // user enters their name
let defaultName; //the default name will be stored in this variable

if(name){
    defaultName = name; //if customer enters name it will be saved in the "defaultname" variable
} else {
    defaultName = "Stranger"; //This is the set default string
}

console.log(`Hello ${defaultName}!, Welcome to our page`); // It will either print the name, if entered or print Stranger

//There is a shorter way of doing the above.

//lets do a code to city

function falsy(){

let username = prompt("What is your name?");
let defaultUsername = username || 'Stranger';

let city = prompt("Which city do you live in?");
let defaultCity = city || "South Africa";

alert(`Hello ${defaultUsername}!, from ${defaultCity}`);

};

const mybutton = document.getElementById('button');

mybutton.addEventListener('click',falsy);