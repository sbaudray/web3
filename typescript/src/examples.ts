// --------
// primitives
// --------

const empty: null = null;
const undeclared: undefined = undefined;
const checked: boolean = true;
const quantity: number = 90;
const word: string = "Tartiflette";

const arr: string[] = ["jean"];
const arr: Array<string> = ["jean"];

const arr: any = ["jean"];
// --------
// date
// --------

const date: Date = new Date();

date.getHours();

// --------
// any
// --------

let foo: any = 1;
foo = "One";
foo = ["1"];

// void

function eat(fruit: string): void {
  console.log(`This ${fruit} was delicious`);
}

eat("apple");

// --------
// array
// --------

const numbers: number[] = [1, 2, 3];

numbers[4] = "cinq";

const words: Array<string> = ["tartiflette", "raclette"];

words[2] = "fondue";

// --------
// tuples
// --------

type Coordinates = [number, number];

type Gps = [city: string, latitude: number, longitude: number];

const coordinates: Array<Gps> = [
  ["Tours", 47, 90],
  ["Paris", 50, 59],
];

// --------
// never
// --------

function reportError(message: string): never {
  throw new Error(message);
}

// ---

type Role = "admin" | "user" | "guest" | "modo";

function getPermissions(role: Role) {
  switch (role) {
    case "admin":
      return ["all"];
    case "user":
      return ["read", "write"];
    case "guest":
      return ["read"];
  }
}

getPermissions("modo");

// --------
// unknown
// --------

try {
  throw "something";
} catch (error) {
  // error is unknown
  console.error(error.message);
}
