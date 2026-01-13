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
