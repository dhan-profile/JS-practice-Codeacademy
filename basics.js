console.log(26);
console.log(2);

console.log("JavaScript");
console.log(2011);
console.log("Woohoo! I love to code! #codecademy");
console.log(20.49);

console.log(26 + 3.5);
console.log(2023 - 1969);
console.log(65/240);
console.log(0.2708*100);

console.log('Hello' + 'World');
console.log('Hello' + ' ' + 'World');

console.log('Teaching the world how to code'.length)

console.log()

// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());

console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));

// **************** PUSH SHIFT ****************** //
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  const removed = arr.shift();
  return removed;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];
// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


// **************** SWITCH - COUNTING CARDS ****************** //
let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');


// **************** ADDING OBJECT PROPERTY ****************** //
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "bow-wow"; // This adds 'bark' property to the class 'myDog'.


// **************** Testing Objects for Properties ****************** //
//To check if a property on a given object exists or not, you can use the .hasOwnProperty() method.
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}


// **************** Accessing Nested Objects ****************** //
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
// To assign the value 'maps' in the object 'myStorage' 👇
const gloveBoxContents = myStorage.car.inside["glove box"];


// **************** Accessing Nested Array of objects ****************** //
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];


// **************** OBJECTIVE - Record Collection ****************** //
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if(value === ""){
    delete records[id][prop];
  }
  else if(prop !== "tracks" && value !== ""){
    records[id][prop] = value;
  } else if(prop === "tracks" && value !== "") {
    if(records[id].hasOwnProperty("tracks") === false){
      records[id][prop] = [];
    }
    records[id][prop].push(value);
  }
  return records;
}
// function updateRecords(records, id, prop, value) {
//   if (value === "") {
//     delete records[id][prop];
//   } else if (prop !== "tracks" && value !== "") {
//     records[id][prop] = value;
//   } else if (prop === "tracks" && value !== "") {
//     if (records[id].hasOwnProperty("tracks") === false) {
//       records[id][prop] = [];
//     }
//     records[id][prop].push(value);
//   }
//   return records;
// }
updateRecords(recordCollection, 5439, 'artist', 'ABBA');


// **************** WHILE LOOP - ARRAYS ****************** //
// Setup
const myArray = [];
// Only change code below this line
let i=5; 
while(i>=0) {
myArray.push(i);
i--;
}


// ****************FOR LOOP - ARRAYS ****************** //
const myArray = [];
for(let i=1; i<=5; i++){
  myArray.push(i);
}


// **************** FOR LOOP ODD NUMBERS - ARRAYS ****************** //
const myArray = [];
for(let i=1; i<=10; i+=2){
  myArray.push(i);
}


// **************** FOR LOOP ODD NUMBERS REVERSE - ARRAYS ****************** //
const myArray = [];
for(let i=9; i>=1; i-=2){
  myArray.push(i);
}


// **************** Iterate Through an Array with a For Loop ****************** //
const myArr = [2, 3, 4, 5, 6];
var total = 0;
for(let i=total; i<myArr.length; i++) {
total += myArr[i];
}


// **************** Nesting For Loops ****************** //
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
    product *= arr[i][j];
  }
}
  return product;
}
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);


// **************** Iterate with JavaScript Do...While Loops ****************** //
const myArray = [];
let i = 10;
do{
  myArray.push(i);
  i++;
}while (i < 5);


// **************** Replace Loops using Recursion ****************** //
function sum(arr, n) {
  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}


// **************** Objective using Recursion ****************** //
function lookUpProfile(name, prop) {
  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}


// **************** Generate Random Whole Numbers ****************** //
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}


// **************** Generate Random Whole Numbers within RANGE ****************** //
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}


