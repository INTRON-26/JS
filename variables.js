/*
    Different Data types are :
      undefined
      null
      boolean
      string
      symbol
      bigint
      number
      object
*/

var myName;

// Assigning values to vairables
var a;
a = 7

// Assigning the Value of One Variable to Another
var a;
a = 7;
var b;
b = a;

// Initializing Variables with the Assignment Operator
var a = 9

// Declaring Strings
var myFirstName = "Dheeraj"
var myLastName = "Reddy"

// Understanding Uninitialized Variables
var c
console.log(c+"This"); // output will be "undefinedThis"

// Keyword let is used to avoid overwitting of variables
let ab =  "10"
// let a = "15" results in error


/* const has all the awesome features that let has,
  with the added bonus that variables declared using const are read-only. 
  They are a constant value, which means that once a variable is assigned with const, 
  it cannot be reassigned

  const app = "THIS";
  app = "THAT"; leads to an error
*/


const NAME = "PVDR";
let gamename = "INTRON";
fact = "I N T R O N";
console.log(NAME, fact);