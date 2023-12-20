/*
Kelvin Weather
Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.

With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.

Kelvin, Celsius, and Fahrenheit thermometers
For example, 283 K converts to 10 °C which converts to 50 °F.

If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.
*/

// kelvin constant declaration
const kelvin = 293;
// converting kelvin to celsius
let celsius = kelvin-273;
// Farenheit calculation and conversion
let fahrenheit = celsius * (9/5) + 32;
// Round values

// Using Math floor function
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} derees Fahrenheit`);
console.log(`Kelvin is about ${fahrenheit} derees Fahrenheit`);

// celcius to Newton
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`Newton is about ${newton} degrees`);
