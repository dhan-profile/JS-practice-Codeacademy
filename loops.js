/*
A loop is a programming tool that repeats a set of instructions until a specified condition, called a stopping condition is reached. As a programmer, you’ll find that you rely on loops all the time! You’ll hear the generic term iterate when referring to loops; iterate simply means “to repeat”.
*/

// ********************* FOR LOOP ********************* //
// Write your code below
for(let i=5; i<=10; i++){
  console.log(i);
}

// ********************* Looping in Reverse ********************* //
// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}

// ********************* Looping through Arrays ********************* //
const vacationSpots = ['Bali', 'Paris', 'Tulum'];
// Write your code below
for(let i=0; i<vacationSpots.length; i++){
  console.log(`I would love to visit ${vacationSpots[i]}`);
}

// ********************* Nested Loops ********************* //
// Write your code below
let bobsFollowers = ['ranjith', 'thomas', 'cibi', 'kevin'];
let tinasFollowers = ['david', 'thomas', 'kevin'];
let mutualFollowers = [];
for(let i=0; i<bobsFollowers.length; i++){
  for(let j=0; j<tinasFollowers.length; j++){
    if(bobsFollowers[i] === tinasFollowers[j]){
      console.log(tinasFollowers[j]);
      mutualFollowers.push(bobsFollowers[i]);         // IMPORTANT PUSH
    }
  }
}

// ********************* The While Loop ********************* //
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;
// Write your code below
while(currentCard != 'spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
console.log(currentCard);
break;
}

// ********************* Do...While Statements ********************* //
// Write your code below
let cupsOfSugarNeeded = 4;
let cupsAdded = 0;
do{
cupsAdded++;
console.log(cupsAdded);
}while(cupsAdded < cupsOfSugarNeeded)

// ********************* The break Keyword ********************* //
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === "Notorious B.I.G.") {
    break;
  }
}
console.log("And if you don't know, now you know.");

