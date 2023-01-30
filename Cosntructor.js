// creating a constructor

function Dog() {
    this.name = "a"
    this.color = "red"
    this.numLegs = 2
}

function Dog1() {
    this.a = 1
}
// creating a new Object
let obj = new Dog()

console.log(obj instanceof Dog);
console.log(obj instanceof Dog1);
