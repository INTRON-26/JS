function Animal() {
    console.log("constructor");
};

Animal.prototype = {
    constructor : Animal,
    describe : function () {
        console.log('name : ' + this.name);
    }
};

// since animal includes describe method, we can avoid it in Bird

function Bird() {};
Bird.prototype = {
    constructor : Bird 
};

// Inherit Behaviors from a Supertype

function Animal2() {};
Animal2.prototype.eat = function() {
    console.log('nom nom nom');
};

// creating object

let obj = Object.create(Animal2.prototype);

// Set the Child's Prototype to an Instance of the Parent

Bird.prototype = Object.create(Animal2.prototype);
let duck = new Bird();
duck.eat();



// Reset an Inherited Constructor Property
function Reptile() { 
    console.log("RConstructor");
}
Reptile.prototype = Object.create(Animal.prototype);
let snake = new Reptile();
snake.constructor() // constructor

Reptile.prototype.constructor = Reptile;

snake.constructor() // Rconstructor



// Add Methods After Inheritance

Reptile.prototype.crawl = () => {
    console.log("Crawl");
};

snake.crawl()

// Override Inherited Methods

Reptile.prototype.eat = () => {
    console.log("override eat");
};

snake.eat()