/* ===========================================================
   Lab 1.1 – Intro
   Exploring JavaScript syntax, console output, and variables.
   =========================================================== */

// TODO 1: Print your full name with console.log()
console.log("Nico Mazorra")

// TODO 2: Declare variable favoriteFood, assign "Steak", then reassign "Pizza"
let favoriteFood = "Steak"; 
favoriteFood = "Pizza"

const favoriteDrink = "Coke"
// favoriteDrink = "Sprite" Cannot reasign to const variable


// TODO 3: Create variable mystery, assign a string, then a number, print type each time
let mystery = "Hello"; 
console.log("Value: " + mystery + "Data Type:" + typeof mystery); // String
mystery = 42;
console.log("Value: " + mystery + "Data Type:" + typeof mystery) // Number

// TODO 4: Declare const schoolName, try to reassign
const schoolName = "Christopher Columbus High School";

// TODO 5: Create three valid camelCase variables and print them
let quarterBack; // Declare
let pointGuard; // Declare

pointGuard = "Dwayne Wade"; // Initialize
let classRoom = "L12" // Declare and Initialize


// 🚀 Stretch Goals (optional)
// - Create a variable age and print "I am X years old" using concatenation
// - Repeat using template literals

let age = 17; // Declared and Initialized
console.log("I am " + age + " years old");



/* ===========================================================
   🎟 EXIT TICKET
   1. What new concept or skill did you learn in this lab?
   2. What challenges did you encounter, and how did you solve them?
   3. Where else could this programming concept be useful?
   =========================================================== */


// Mini FRQ - Lab 1.1

// Declaring and Initializing
let width = 10;
let height = 6;

// Computing Area and Preimeter
let area = width * height;
let perimeter = 2 * (width + height);

console.log('The area is: ${area}') // template literals
console.log("The perimeter is: " + perimeter); // String concatenation

