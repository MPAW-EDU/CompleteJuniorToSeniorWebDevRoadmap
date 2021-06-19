var sum = function (a, b) {
    return a + b;
};
var answer = sum(4, 5);
console.log(answer);
// Boolean
var iceCole = true;
// Number
var age = 21;
// String
var eyeColor = "Brown";
// Arrays
var pets = ['Cat', 'Dog', 'Horse'];
var pets2 = ['Lion', 'Tiger', 'Bear'];
// Object
var Wizard = {
    name: 'John',
    type: 'Fire'
};
// Null and Undefined
var wah = undefined;
var wahhahh = null;
// Tuple 
var basket;
basket = ['basketball', 5];
// Enum 
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["medium"] = 2] = "medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
;
var sizeName = Size[2];
var SizeName2 = Size.small;
// Any - !! Take Caution !!
var whatever = 'Arrrgg!';
whatever = Size.small;
// Void
var sing = function () {
    console.log('LalaLala!');
};
// Never
var error = function () {
    throw Error('Ooops!');
};
var fightRobotArmy = function (robots) {
    console.log('FIGHT!');
};
// Using a question mark asserts that it may or may not be part of an instantiation of the object.
var fightAlienArmy2 = function (alien) {
    console.log('MMMGRRRGGLLE!!');
};
fightAlienArmy2({ count: 1, type: 'Hydra' });
var Alien = {};
Alien.count;
// Function
var fightAlienArmy3 = function (aliens) {
    console.log('ALIEN FIGHT 3!');
};
var fightRobotArmy4 = function (robots) {
    console.log('ALIEN FIGHT 4!');
    return 5;
};
// Classes
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'LaLaLaLaLALA';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var Lion = new Animal("Rooaaar!");
Lion.greet();
