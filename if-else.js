/*
values are falsy— or evaluate to false when checked as a condition? The list of falsy values includes:
0
Empty strings like "" or ''
null which represent when there is no value at all
undefined which represent when a declared variable lacks a value
NaN, or Not a Number

ASSIGNING MULTIPLE VALUES
let username = '';
let defaultName = username || 'Stranger';

console.log(defaultName); // Prints: Stranger

Because || or statements check the left-hand condition first, the variable defaultName will be assigned the actual value of username
*/

// ********** USING IF ********** //
let sale = true;
if(sale){
  console.log('Time to buy!');
}

// ********** USING ELSE ********** //
let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
}
else{
  console.log('Time to wait for a sale.');
}

// ********** USING ELSE WITH CONDITION ********** //

let hungerLevel = 7;
if(hungerLevel > 7){
  console.log('Time to eat!');
}
else{
  console.log('We can eat later!');  
}

// ********** USING && || ! OPERATORS ********** //
let mood = 'sleepy';
let tirednessLevel = 6;

if(mood === 'sleepy' && tirednessLevel > 8){
  console.log('time to sleep');
}
else{
  console.log('not bed time yet');
}

// ********** USING 0 ZERO or NULL or '' CONDITIONS ********** //
let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log("Better get to work!");
}

let favoritePhrase = "";

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log("This string is definitely empty.");
}

// ********** USING || CONDITIONS in ASSIGNING STRING ********** //
let tool = "";

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || "pen";

console.log(`The ${writingUtensil} is mightier than the sword.`);

// ********** USING TERNARY OPERATOR ********** //
let isLocked = false;

// if (isLocked) {
//   console.log('You will need a key to open the door.');
// } else {
//   console.log('You will not need a key to open the door.');
// }

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

// if (isCorrect) {
//   console.log('Correct!');
// } else {
//   console.log('Incorrect!');
// }

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

// let favoritePhrase = 'Love That!';

// if (favoritePhrase === 'Love That!') {
//   console.log('I love that!');
// } else {
//   console.log("I don't love that!");
// }

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");


// ********** USING ELSE IF ********** //
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} 
else if(season === 'winter'){
  console.log('It\'s winter! Everything is covered in snow.');
}
else if(season === 'fall'){
  console.log('It\'s fall! Leaves are falling!');
}
else if(season === 'summer'){
  console.log('It\'s sunny and warm because it\'s summer!');
}
 else {
  console.log('Invalid season.');
}

// ********** USING SWITCH KEYWORD ********** //
let athleteFinalPosition = 'first place';
switch(athleteFinalPosition){
  case 'first place':
  console.log('You get the gold medal!');
  break;
  case 'second place':
  console.log('You get the silver medal!');
  break;
  case 'third place':
  console.log('You get the bronze medal!');
  break;
  default:
  console.log('No medal awarded.');
  break;
  }

/*
An if statement checks a condition and will execute a task if that condition evaluates to true.
if...else statements make binary decisions and execute different code blocks based on a provided condition.
We can add more conditions using else if statements.
Comparison operators, including <, >, <=, >=, ===, and !== can compare two values.
The logical and operator, &&, or “and”, checks if both provided expressions are truthy.
The logical operator ||, or “or”, checks if either provided expression is truthy.
The bang operator, !, switches the truthiness and falsiness of a value.
The ternary operator is shorthand to simplify concise if...else statements.
A switch statement can be used to simplify the process of writing multiple else if statements. The break keyword stops the remaining cases from being checked and executed in a switch statement.
*/

