# JS-practice
<h2>CODEACADEMY</h2>
<button><a href="https://www.codecademy.com/courses/introduction-to-javascript">Click Here</a></button>
<br>
<hr>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" width=30% height=30%>
<h2>NOTES:</h2>
<h3>SCOPE</h3>
<p>In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

Variables which are declared without the let or const keywords are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with let or const.</p>
<br>
<h3>QUEUE</h3>
<p>In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.</p>
<br>
<h3>OBJECTS</h3>
<P>There are two ways to access the properties of an object: <b>dot notation (.)</b> and <b>bracket notation ([])</b>, similar to an array.
Dot notation is what you use when you know the name of the property you're trying to access ahead of time.</P>
<p>The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.

However, you can still use bracket notation on object properties without spaces.

Here is a sample of using bracket notation to read an object's property:
<code>
const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];
</code>
</p>

<p>Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.

Here is an example of using a variable to access a property:
<code>
const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
</code>
The string Doberman would be displayed in the console.
</p>
