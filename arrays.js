// Arrays in js are like python, they can be heterogeneous

var arr = ["Dheeraj", 88];
console.log(arr[0]);


// Nesting of arrays
arr = [["Dheeraj", 88],["Dhiraj", 9]];
console.log(arr);

// Modifying arrays
var arr2 = [1,2,3,4];
arr[0] = 5;

// push()
arr.push(["dog", 3])

// pop()
arr.pop()

// Store pop()
const temp = arr.pop()

// shift() removes the first element from the array
arr2.shift()
const temp2 = arr2.shift()

// unshift() adds element to the beginning of the array
arr2.unshift(12)