
let target = Math.floor(Math.random() * 10) + 1; // random number from 1 to 100
// Math.random(): returns number between 0 (inclusive) and 1 (exclusive)
// -> Multiply by 10 to get a number from 0 to 9
// use Math.floor() on the result of (Math.random() * 100) to get whole number
// add 1 so numbers become range from 1 to 10 instead of 0 to 9

let guess = 0; // initialize guess to 0
let count = 0;  // counter to keep track of guesses 
while(guess !== target){ // while our guess is not equal to our target value
    // prompt user to input a guess
    guess = parseInt(prompt("I'm thinking of a number between 1 and 10, can you guess what it is?", "0"));
    count++; // increment guess counter
    console.log(`guess #${count}: ${guess}`);
}

// console.log target num
console.log(`target: ${target}`);

// when we escape the while loop give the user a congratulations message
const body = document.getElementsByTagName("body"); // get body elements 
const h2 = document.createElement("h2"); // create h2 element to write congratulations message
const congrats = document.createTextNode(`You guessed the number I was thinking of: ${target}!`); // create text node to store congratulations message
h2.appendChild(congrats); // append congrats message text to h2 element
body[0].appendChild(h2); // append h2 element to body element


