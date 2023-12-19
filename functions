/*
What are Functions?
When first learning how to calculate the area of a rectangle, there’s a sequence of steps to calculate the correct answer:

Measure the width of the rectangle.
Measure the height of the rectangle.
Multiply the width and height of the rectangle.
With practice, you can calculate the area of the rectangle without being instructed with these three steps every time.

We can calculate the area of one rectangle with the following code:

const width = 10;
const height = 6;
const area =  width * height;
console.log(area); // Output: 60

Imagine being asked to calculate the area of three different rectangles:

// Area of the first rectangle
const width1 = 10;
const height1 = 6;
const area1 =  width1 * height1;

// Area of the second rectangle
const width2 = 4;
const height2 = 9;
const area2 =  width2 * height2;

// Area of the third rectangle
const width3 = 10;
const height3 = 10;
const area3 =  width3 * height3;

In programming, we often use code to perform a specific task multiple times. Instead of rewriting the same code, we can group a block of code together and associate it with one task, then we can reuse that block of code whenever we need to perform the task again. We achieve this by creating a function. A function is a reusable block of code that groups together a sequence of statements to perform a specific task.

In this lesson, you will learn how to create and use functions, and how they can be used to create clearer and more concise code.
*/
// ************* Basic ************* //
function getReminder(){
  console.log('Water the plants.');
}
function greetInSpanish(){
  console.log('Buenas tardes.');
}
getReminder();
greetInSpanish();

// ************* Repeat ************* //

function sayThanks(){
console.log('Thank you for your purchase! We appreciate your business.');
}
sayThanks();
sayThanks();
sayThanks();

// ************* Parameters and Arguments ************* //
function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}
// let customerName = 'Cole';
sayThanks('Cole');

// ************* Default Parameters ************* //
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList();

// ************* Return ************* //
function monitorCount(rows,columns){
return rows*columns;
}
const numOfMonitors = monitorCount(5,4);
console.log(numOfMonitors);

// ************* Helper Functions ************* //
function monitorCount(rows, columns) {
  return rows * columns;
}
function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}
const totalCost = costOfMonitors(5, 4);
console.log(totalCost);

// ************* Function Expressions ************* //
/*
Another way to define a function is to use a function expression. To define a function inside an expression, we can use the function keyword. In a function expression, the function name is usually omitted. A function with no name is called an anonymous function. A function expression is often stored in a variable in order to refer to it.
*/
const plantNeedsWater = function(day){
  if(day === 'Wednesday'){
    return true;
  }
  else{
    return false;
  }
}
console.log(plantNeedsWater('Tuesday'));

// ***************** ARROW FUNCTIONS **************** //
/*
ES6 introduced arrow function syntax, a shorter way to write functions by using the special “fat arrow” () => notation.

Arrow functions remove the need to type out the keyword function every time you need to create a function. Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { } like this:

const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};
It’s important to be familiar with the multiple ways of writing functions because you will come across each of these when reading other JavaScript code.
*/

const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

// ***************** Concise Body ARROW FUNCTIONS **************** //

const plantNeedsWater = (day) => {
  return day === 'Wednesday' ? true : false;
};
// CAN BE WRITTEN AS:
const plantNeedsWater = day => day === 'Wednesday' ? true : false;


