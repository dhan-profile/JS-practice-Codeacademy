const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

////////////////////////////////////////////
console.log('=================================');
///////////////////////////////////////////

const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map(number => {
  return number * number;
});
console.log(squareNumbers);

////////////////////////////////////////////
console.log('=================================');
///////////////////////////////////////////

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});
console.log(onlyNumbers);

// **************** The .forEach() Method ****************** //
const fruits = ["mango","papaya","pineapple","apple"];
fruits.forEach(fruit => console.log(`I want ot eat a ${fruit}`));


// **************** The .map() Method ****************** //
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(secretMessage => {
  return secretMessage[0];
});

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(smallNumbers => {
return smallNumbers/100;
});


// **************** The .filter() Method ****************** //
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(randomNumbers => {
  return randomNumbers < 250
});

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(favoriteWords => {
return favoriteWords.length > 7;
});


// **************** The .findIndex() Method ****************** //
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(ani => {
return ani === 'elephant'
});
const startsWithS = animals.findIndex(anis => {
// return anis.startsWith('s');
return anis[0] === 's' ? true : false;
});
console.log(foundAnimal);
console.log(startsWithS);


// **************** The .reduce() Method ****************** //
/*
The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array. 
*/
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log("The value of accumulator: ", accumulator);
  console.log("The value of currentValue: ", currentValue);
  return accumulator + currentValue;
}, 10);
console.log(newSum);

// ***************** ITERATORS ***************** //
const words = ["unique", "uncanny", "pique", "oxymoron", "guise"];

// Something is missing in the method call below

console.log(
  words.some((word) => {
    return word.length < 6;
  })
);

// Use filter to create a new array
const interestingWords = words.filter((wordFive) => {
  return wordFive.length > 5;
});

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(
  interestingWords.every((word) => {
    return word.length > 5;
  })
);

/*
forEach() method will do something to each of the values in the array and return undefined.
filter() method will return a new array with only those elements longer than 7 characters.
reduce() method accepts an array containing multiple values and returns a single value.
every() method will return a boolean value.
map() method will return a new array of numbers returned from the function.
*/
