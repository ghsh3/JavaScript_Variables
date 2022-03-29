console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const firstName = `Sharry`;
let lastName = "Hayes";

var myAge = 54;
let isDone; // Undefine
// let isDone = fales  is Boolean

// Exercise 2
//first - concatenation; second - interpolated
let fullName = firstName + " " + lastName;
let templateFullName = `${firstName} ${lastName}`;
console.log("fullName: ", fullName);
console.log("templateFullName: ", templateFullName);


// Exercise 3

let myStory;
let city = "Denver";
let favoritePastTime = "Spending time with family";


//Template lliteral
myStory = `Hi, my name is ${fullName}. 
I live in ${city}.
I enjoy ${favoritePastTime}.`;

console.log(myStory);
               

// Concatenation:  
//  "\n is an excape charater"
myStory = 
"Hi, my name is " 
+ fullName + 
".\n " + 
"I live in " + 
city + 
".\n " + 
"I enjoy " + 
favoritePastTime + 
"."; 

console.log(myStory);




