/*
Magic Eight Ball
You’ve learned a powerful tool in JavaScript: control flow! It’s so powerful, in fact, that it can be used to tell someone’s fortune.

In this project we will build a Magic Eight Ball using control flow in JavaScript.

The user will be able to input a question, then our program will output a random fortune.

If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.
*/

let userName = "Dhanush";
userName ? console.log(`Hello ${userName}!`) : console.log("Hello!");

const userQuestion = "What is your favorite color?";
console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";
console.log(randomNumber);

switch (randomNumber) {
  case 1:
    eightBall = "It is certain";
    console.log(eightBall);
    break;
  case 2:
    eightBall = "It is decidedly so";
    console.log(eightBall);
    break;
  case 3:
    eightBall = "Reply hazy try again";
    console.log(eightBall);
    break;
  case 4:
    eightBall = "Cannot predict now";
    console.log(eightBall);
    break;
  case 5:
    eightBall = "Do not count on it";
    console.log(eightBall);
    break;
  case 6:
    console.log("My sources say no");
    break;
  case 7:
    console.log("Outlook not so good");
    break;
  case 8:
    console.log("Signs point to yes");
    break;
}
