/*
Arrays are JavaScript’s way of making lists. Arrays can store any data types (including strings, numbers, and booleans). Like lists, arrays are ordered, meaning each item has a numbered position.

Here’s an array of the concepts we’ll cover:

let concepts = ['creating arrays', 'array structures', 'array manipulation'];
*/

// ************** Basics **************** //
const hobbies = ['Hello', 'I am', 'Dhanush'];
console.log(hobbies);

// ************** Accessing Elements **************** //
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

let listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);  // UNDEFINED

let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'avocados';

// ************** Arrays with let and const **************** //
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils);

// ************** The .length property **************** //
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);

// ************** The .push() Method **************** //
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('element1','element2');
console.log(chores);

// ************** The .pop() Method **************** //
//.pop(), removes the last item of an array.
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop();
console.log(chores);

// ************** More Array Methods **************** //
// .shift() method removes the first item from the array 
// .unshift() method adds the element to the array 
// .slice() does not mutate or change values from original array
const groceryList = [
  "orange juice",
  "bananas",
  "coffee beans",
  "brown rice",
  "pasta",
  "coconut oil",
  "plantains",
];

groceryList.shift();
console.log(groceryList);

groceryList.unshift("popcorn");
console.log(groceryList);

console.log(groceryList.slice(1, 4));
console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

// ************** ARRAYS and FUNCTIONS **************** //
const concept = ["arrays", "can", "be", "mutated"];

function changeArr(arr) {
  arr[3] = "MUTATED";
}
function removeElement(newArr) {
  newArr.pop();
}
changeArr(concept);
console.log(concept);
removeElement(concept);
console.log(concept);

// ************** Nested Arrays **************** //
let numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][1];

