// --------
// Fibonnaci
// --------

export function fibonacci(n: number): number {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}
export function fibonacci(n: number): number {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let current = 1;

  for (let i = 2; i <= n; i++) {
    const next = prev + current;
    prev = current;
    current = next;
  }

  return current;
}

// --------
// BubbleSort
// --------

export function bubbleSort(list: Array<number>): Array<Number> {
  const clone = list.slice();

  let swapped = true;
  let passes = 0;

  while (swapped === true) {
    swapped = false;
    passes += 1;

    for (let i = 1; i <= clone.length - passes; i++) {
      let curr = clone[i];
      let prev = clone[i - 1];

      if (curr < prev) {
        swapped = true;
        clone[i] = prev;
        clone[i - 1] = curr;
      }
    }
  }

  return clone;
}

// --------
// HangMan Game
// --------

interface HangmanGameState {}

function createGame(secret: string): HangmanGameState {}

function playTurn(
  letter: string,
  gameState: HangmanGameState
): HangmanGameState {}

function displaySecret(state: HangmanGameState) {}

const game = createGame("santa");
const turn1 = playTurn("e", game);
const turn2 = playTurn("a", turn1);
const turn3 = playTurn("n", turn2);
console.log(displaySecret(turn3)); // '_AN_A'

// --------
// Human Class
// --------

class Human {
  private _speed: number = 1;
  private _age: number = 0;

  get speed() {
    return this._speed;
  }

  set speed(value: number) {
    this._speed = value;
  }

  get age() {
    return this._age;
  }

  growOlder() {
    this._age += 1;
  }

  describe() {
    console.log(
      `This human is ${this.age} years old and can walk at ${this._speed} mph.`
    );
  }
}

const bob = new Human();

bob.growOlder();
bob.speed = 8;
console.log(bob.age, bob.speed);
