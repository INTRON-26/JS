const dog = {
    "name" : "tommy",
    "legs" : 4,
    "tails" : 1,
    "friends" : ["Ca","da"]
};


console.log(dog["name"]);
console.log(dog.name);


dog.name = "Charlie";
dog.bark = "woof"

delete dog.friends



var myObj = {
    "gift" : "pony",
    "pet" : "kitten",
    "bed" : "sleigh"
};  
  
function checkObj(checkProp) {

    if (myObj.hasOwnProperty(checkProp)) return myObj[checkProp]; // If true return the prop
  
    return "Not Found";
}
  

checkObj("gift");

// using functions in js objects
let dog1 = {
    name: "Spot",
    numLegs: 4,
    sayLegs : function() {
      return "This dog has " + this.numLegs + " legs."
    },
};
  
dog1.sayLegs();