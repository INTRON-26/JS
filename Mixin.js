

/*
    As you have seen, behavior is shared through inheritance. 
    However, there are cases when inheritance is not the best solution.
    Inheritance does not work well for unrelated object
*/

let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};


let glideMixin = (obj) => {
    obj.glide = () => {
        console.log("Bing chilling")
    };
};

glideMixin(bird);
glideMixin(boat);