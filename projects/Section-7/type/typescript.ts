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
let fightAlienArmy = (alien: AlienArmy) => {
    console.log('MMMGRRRGGLLE!!');
    
}

fightAlienArmy({count: 1, type: 'Hydra'})

let Alien = {} as AlienArmy
Alien.count