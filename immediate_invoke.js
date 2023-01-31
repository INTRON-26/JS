// IIFE - Immediately Invoked Function Expression (IIFE)

// This function is anonymous and is immediately invoked

(function () {
    console.log("Chirp, chirp!");
})();

// Use an IIFE to Create a Module

let funModule = (function () {
    return {
        isCuteMixin: function (obj) {
            obj.isCute = function () {
                return true;
            };
        },
        singMixin: function (obj) {
            obj.sing = function () {
                console.log("Singing to an awesome tune");
            };
        }
    };
})();