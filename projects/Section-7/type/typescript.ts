const sum = ( a:number , b:number ) =>  {
    return a + b;
}

const answer = sum(4, 5);

console.log(answer);

// Boolean
let iceCole: boolean = true;

// Number
let age: number = 21;

// String
let eyeColor: string = "Brown";

// Arrays
let pets: string[] = ['Cat','Dog','Horse'];
let pets2: Array<string> = ['Lion', 'Tiger', 'Bear']

// Object
let Wizard: object = {
    name: 'John',
    type: 'Fire'
}

// Null and Undefined
let wah: undefined = undefined;
let wahhahh: null = null;

// Tuple 
let basket : [string, number];
basket = ['basketball', 5]

// Enum 
enum Size { small = 1, medium = 2, large = 3};
let sizeName: string = Size[2]
let SizeName2: number = Size.small;

// Any - !! Take Caution !!
let whatever: any = 'Arrrgg!';
whatever = Size.small;

// Void
let sing = (): void => {
    console.log('LalaLala!');
}

// Never
let error = (): never => {
    throw Error('Ooops!');
}

// Interface
interface RobotArmy {
    count: number,
    type: string,
    magic: string
}

let fightRobotArmy = (robots: RobotArmy) => {
    console.log('FIGHT!');
}

// Type Assertions
interface AlienArmy {
    count: number,
    type: string,
    magic?: string
}
// Using a question mark asserts that it may or may not be part of an instantiation of the object.
let fightAlienArmy2 = (alien: AlienArmy) => {
    console.log('MMMGRRRGGLLE!!');
    
}

fightAlienArmy2({count: 1, type: 'Hydra'})

let Alien = {} as AlienArmy
Alien.count

// Function
let fightAlienArmy3 = ( aliens: AlienArmy ): void => {
    console.log('ALIEN FIGHT 3!');
}

let fightRobotArmy4 = (robots: {count: number, type: string, magic: string}): number => {
    console.log('ALIEN FIGHT 4!');
    return 5;
} 

// Classes
class Animal {
    private sing: string = 'LaLaLaLaLALA'
    constructor(sound: string){
        this.sing = sound;
    }

    greet(){
        return `Hello ${this.sing}`;
    }
}

let Lion = new Animal("Rooaaar!")

Lion.greet()


// Union Type
let confused: string | number | boolean = "Hello"