/*
// ************** Scope ****************** //
An important idea in programming is scope. Scope defines where variables can be accessed or referenced. While some variables can be accessed from anywhere within a program, other variables may only be available in a specific context.

You can think of scope like the view of the night sky from your window. Everyone who lives on the planet Earth is in the global scope of the stars. The stars are accessible globally. Meanwhile, if you live in a city, you may see the city skyline or the river. The skyline and river are only accessible locally in your city, but you can still see the stars that are available globally.

Over the next few exercises, we’ll explore how scope relates to variables and learn best practices for variable declaration.
*/

const city = 'New York City';
function logCitySkyline(){
  let skyscraper = 'Empire State Building';

  return 'The stars over the ' + skyscraper + ' in ' + city;
}
console.log(logCitySkyline());

// ************** Global Scope ****************** //
let satellite = "The Moon";
let galaxy = "The Milky Way";
let stars = "North Star";
function callMyNightSky() {
  return "Night Sky: " + satellite + ", " + stars + ", and " + galaxy;
}
console.log(callMyNightSky());

// ************** Block Scope ****************** //
/*Variables that are declared with block scope are known as local variables because they are only available to the code that is part of the same block.*/
function logVisibleLightWaves(){
const lightWaves = 'Moonlight';
console.log(lightWaves);
}
logVisibleLightWaves();
console.log(lightWaves); // REFERENCE Error

// ************** Scope Pollution ****************** //
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';         // Changes the Global variable - "stars"
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);   

// ************** Practice Good Scoping ****************** //
const logVisibleLightWaves = () => {
  let lightWaves = "Moonlight";
  let region = "The Arctic";
  // Add if statement here:
  if (region === "The Arctic") {
    let lightWaves = "Northern Lights";
    console.log(lightWaves);  // OUTPUTS - Northern Lights
  }
  console.log(lightWaves);    // OUTPUTS - Moonlight
};

logVisibleLightWaves();


