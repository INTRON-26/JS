# Use Prototype Properties to Reduce Duplicate Code
Since numLegs will probably have the same value for all instances of Bird, you essentially have a duplicated variable numLegs inside each Bird instance.

This may not be an issue when there are only two instances, but imagine if there are millions of instances. That would be a lot of duplicated variables.

A better way is to use the prototype of Bird. Properties in the prototype are shared among ALL instances of Bird. Here's how to add numLegs to the Bird prototype:

```
Bird.prototype.numLegs = 2;
```

Now all instances of Bird have the numLegs property.

```
console.log(duck.numLegs);
console.log(canary.numLegs);
```

## differentiating between prototype properties and own properties

```
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");


let ownProps = [];
let prototypeProps = [];

for(let a in beagle) {
  if(beagle.hasOwnProperty(a)) {
    ownProps.push(a)
  } else {
    prototypeProps.push(a)
  }
}

// Only change code below this line
```