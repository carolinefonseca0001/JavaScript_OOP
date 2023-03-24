console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }
  addHobby(test) {
    this.hobbies.push(test);
  }
  removeHobby(test2) {
    this.hobbies = this.hobbies.filter((item) => test2 !== item);
  }
  greeting() {
    console.log("Hello fellow person!");
  }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

class Coder extends Person {
  constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);

    this.occupation = "Full Stack Web Developer";
  }
  greeting() {
    console.log("Hello Coder!");
  }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let Matt = new Person("Matt", 3, "Somerville", ["video games", "reading"]);
console.log(Matt);
Matt.addHobby("writing");
console.log(Matt);
Matt.removeHobby("reading");
console.log(Matt);

let Caroline = new Person("caroline", 0, "Port Royal", ["travel", "coding"]);

console.log(Caroline);

let Sparky = new Coder("Sparky", 1, "Port Royal", ["travel", "coding"], "HTML");
console.log(Sparky);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class calculator {
  constructor() {
    this.result = 0;
  }
  add(a, b) {
    this.result = a + b;
  }
  subtract(a, b) {
    this.result = a - b;
  }
  multiply(a, b) {
    this.result = a * b;
  }
  divide(a, b) {
    this.result = a / b;
  }
  displayResult() {
    console.log(this.result);
  }
}
let X = new calculator();
X.add(2, 3);
X.displayResult();
X.subtract(10, 4);
X.displayResult();
X.divide(70, 10);
X.displayResult();
X.multiply(4, 2);
X.displayResult();
