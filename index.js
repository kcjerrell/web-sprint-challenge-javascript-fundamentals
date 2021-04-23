//🚀🚀🚀  Topic #1 Closures 🚀🚀🚀//
/* 🚀🚀🚀🤓 Task 1: 🤓🚀🚀🚀
Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

//🚀🚀🚀 ⬇️ 📝 Explanation ⬇️ 📝 🚀🚀🚀:

/* When 'nestedFunction' is declared, a closure is created containing the variables it accesses. In this case,
   'internal' is included in that closure. */


/* 🚀🚀🚀 Task 2: Counter 🚀🚀🚀 */
/* Use summation to do the following:
    1. Receive a number
    2. Use a counter to return the summation of that number.

For example, `summation(4)` should return 10 because 1+2+3+4 is 10. Note, you may use a for loop for this function if you wish */


/**
 * Summation
 *
 * @param {Number} n
 * @returns {Number} the sum of every positive integer up to and including n
 */
function summation(n) {
  let total = 0;

  // this nested function creates a closure around 'total'
  function addToTotal(n) {
    total += n;
  }

  for (let i = 1; i <= n; i++) {
    addToTotal(i);
  }

  return total;
}


/**
 * Summation... using recursion (but no closure)
 *
 * @param {Number} n
 * @returns {Number} the sum of every positive integer up to and including n
 */
function summationRecursive(n) {
  if (n > 0)
    return n + summationRecursive(n - 1);
  else
    return 0;
}


/**
 * Summation... in a one-line arrow function
 *
 * @param {Number} n
 * @returns {Number} the sum of every positive integer up to and including n
 */
const summationArrow = n => n <= 0 ? 0 : n + summationRecursive(n - 1);



// 🦁🦁🦁 Topic 2: ADVANCED Array Methods 🦁🦁🦁
// Given this zoo data from around the United States, follow the instructions below. Use the specific array methods in the requests below to solve the problems.

/**
 * A zoo animal
 * @typedef {Object} Animal
 * @property {string} animal_name - the common name of the animal
 * @property {number} population - the zoo's current animal count
 * @property {string} scientific_name - the animal's genus and species
 * @property {string} state - the animal's origin state
 * */

/**
 * @const {Animal[]}
 */
const zooAnimals = [
  { animal_name: "Jackal, asiatic", population: 5, scientific_name: "Canis aureus", state: "Kentucky" },
  { animal_name: "Screamer, southern", population: 1, scientific_name: "Chauna torquata", state: "Alabama" },
  { animal_name: "White spoonbill", population: 8, scientific_name: "Platalea leucordia", state: "Georgia" },
  { animal_name: "White-cheeked pintail", population: 1, scientific_name: "Anas bahamensis", state: "Oregon" },
  { animal_name: "Black-backed jackal", population: 2, scientific_name: "Canis mesomelas", state: "Washington" },
  { animal_name: "Brolga crane", population: 9, scientific_name: "Grus rubicundus", state: "New Mexico" },
  { animal_name: "Common melba finch", population: 5, scientific_name: "Pytilia melba", state: "Pennsylvania" },
  { animal_name: "Pampa gray fox", population: 10, scientific_name: "Pseudalopex gymnocercus", state: "Connecticut" },
  { animal_name: "Hawk-eagle, crowned", population: 10, scientific_name: "Spizaetus coronatus", state: "Florida" },
  { animal_name: "Australian pelican", population: 5, scientific_name: "Pelecanus conspicillatus", state: "West Virginia" },
];

/* 🦁🦁🦁 Request 1: .forEach() 🦁🦁🦁
The zoos want to display both the scientific name and the animal name in front of the habitats.
Use animalNames to populate and return the displayNames array with only the animal name and scientific name of each animal.
displayNames will be an array of strings, and each string should follow this pattern: "name: {name}, scientific: {scientific name}"
*/

/**
 * Generates a list of animals with both common and scientific names
 *
 * @param {Animal[]} animals - an array of animal data
 * @returns {string[]} an array of animal names
 */
function animalNames(animals) {
  const displayNames = [];
  animals.forEach(a => {
    displayNames.push(`name: ${a.animal_name}, scientific: ${a.scientific_name}`);
  });
  return displayNames;
}


/* 🦁🦁🦁 Request 2: .map() 🦁🦁🦁
The zoo needs a list of all their animal's names converted to lower case.
Using lowerCaseNames use .map() to create a new array of strings with the animal's names in lowercase and return the new array.
For example: ['jackal, asiatic', .....]
*/

/**
 * Returns a list of lower-cased animal names
 *
 * @param {Animal[]} animals - an array of animal data
 * @returns {string[]} animal names, in lower case
 */
function lowerCaseNames(animals) {
  return animals.map(a => a.animal_name.toLowerCase());
}


/* 🦁🦁🦁 Request 3: .filter() 🦁🦁🦁
The zoo is concerned about animals with a lower population count.
Using lowPopulationAnimals use .filter() to create a new array of objects which contains only the animals with a population of less than 5.
*/

/**
 * Returns a list of animals with populations below 5
 *
 * @param {Animal[]} animals - an array of animal data
 * @returns {Animal[]} a list of the most endangered animals
 */
function lowPopulationAnimals(animals) {
  return animals.filter(a => a.population < 5);
}


/* 🦁🦁🦁 Request 4: .reduce() 🦁🦁🦁
The zoo needs to know their total animal population across the United States.
Using USApop find the total population from the zoos array using the .reduce() method.
Remember the reduce method takes two arguments: a callback (which itself takes two args - the accumulator and the item), and an initial value for the count.
*/

/**
 * Calculates the total population of all animals
 *
 * @param {Animal[]} animals - an array of animal data
 * @returns {number} the total population of ALL animals
 */
function USApop(animals) {
  return animals.reduce((n, a) => {
    return n + a.population;
  }, 0);
}



// 🦁🦁🦁 Callbacks 🦁🦁🦁
/* 🦁🦁🦁 Step 1: Create a higher-order function 🦁🦁🦁
  * Use the higher-order function consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as an argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/

/**
 * A higher-order function that returns the result of a callback with the provided arguements
 *
 * @param {any} a - the first parameter
 * @param {any} b - the second parameter
 * @param {(a: any, b: any) => any} cb - the callback function
 * @returns {any} the result of calling cb with a and b
 */
function consume(a, b, cb) {
  return cb(a, b);
}


/* 🦁🦁🦁 Step 2: Create several functions to callback with consume(); 🦁🦁🦁 */
// 🦁🦁🦁 Use add to return the sum of two numbers 🦁🦁🦁

/**
 * Adds two numbers
 *
 * @param {number} a - a number to be added
 * @param {number} b - a number to be added... to
 * @returns {number} the sum of a and b
 */
function add(a, b) {
  return a + b;
}

// 🦁🦁🦁 Use multiply to return the product of two numbers 🦁🦁🦁

/**
 * Returns the product of two numbers
 *
 * @param {number} a a number to be multiplied
 * @param {number} b the mutliplicand
 * @returns {number} the product of a and b
 */
function multiply(a, b) {
  return a * b;
}


// 🦁🦁🦁 Use greeting to accept a first and last name and return "Hello {first-name} {last-name}, nice to meet you!" 🦁🦁🦁

/**
 * Generates a greeting for a given person's name
 *
 * @param {string} firstName - the greeter's first name
 * @param {string} lastName - the greater's last name
 * @returns {string} a friendly greeting
 */
function greeting(firstName, lastName) {
  return `Hello ${firstName} ${lastName}, nice to meet you!`
}


// 🦁🦁🦁 Step 3: Check your work by un-commenting the following calls to consume(): 🦁🦁🦁
// ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// 🦁💪 Stretch: If you haven't already, convert your array method callbacks into arrow functions - make sure you comment out this section before you submit your work 🦁💪

/* They are already arrow function */



// 🐴🐴🐴 Topic 3: Prototypes 🐴🐴🐴 //
//🐴🐴🐴 Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge. 🐴🐴🐴
/* 🐴🐴🐴 Step 1: Base Constructor 🐴🐴🐴
 Use the constructor function named CuboidMaker to accept properties for length, width, and height which can be initialized as an object
*/

/**
 * Cuboid Attributes
 * @typedef {Object} CuboidAttributes
 * @property {number} length
 * @property {number} width
 * @property {number} height
 */

/**
 * Constructor function for a Cuboid object
 *
 * @param {CuboidAttributes} attrs - the attributes for the cuboid
 */
function CuboidMaker(attrs) {
  this.length = attrs.length;
  this.width = attrs.width;
  this.height = attrs.height;
}


/* 🐴🐴🐴 Step 2: Volume Method 🐴🐴🐴
  Create a method called volume using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  Formula for cuboid volume: length * width * height   */

CuboidMaker.prototype.volume = function () {
  return this.length * this.width * this.height;
};


/* 🐴🐴🐴 Step 3: Surface Area Method 🐴🐴🐴
  Create another method called surfaceArea using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height.
  Formula for cuboid surface area of a cube:
  2 * (length * width + length * height + width * height)  */

CuboidMaker.prototype.surfaceArea = function () {
  return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
}


/* 🐴🐴🐴 Step 4: Create a new object that uses CuboidMaker 🐴🐴🐴
  Create an object called cuboid that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid. */

const cuboid = new CuboidMaker({ length: 4, width: 5, height: 5 });


// 🐴🐴🐴 Test your volume and surfaceArea methods by uncommenting the logs below: 🐴🐴🐴
// ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130



// 🦄🦄🦄 Topic 4: Classes 🦄🦄🦄 //
//🦄🦄🦄 1. Take your prototypes from above and refactor into class syntax. Please rename your class CuboidMakerTwo and your object cuboidTwo 🦄🦄🦄

/** Class representing a Cuboid */
class CuboidMakerTwo {

  /**
   * Create a Cuboid
   * @param {CuboidAttributes} attrs
   */
  constructor(attrs) {
    this.length = attrs.length;
    this.height = attrs.height;
    this.width = attrs.width;
  }

  /**
   * Returns the volume of this cuboid
   * @returns {number} the volume
   */
  volume() {
    return this.length * this.width * this.height;
  }

  /**
   * Returns the surface area of this cuboid
   * @returns {number} the surface area
   */
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const cuboidTwo = new CuboidMakerTwo({ length: 4, width: 5, height: 5 });


//🦄🦄🦄 Test your volume and surfaceArea methods by uncommenting the logs below: 🦄🦄🦄
console.log(cuboidTwo.volume()); // 100
console.log(cuboidTwo.surfaceArea()); // 130



// 🦄 💪 Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area. 🦄 💪

/**
 * Class representing a cube
 * @extends CuboidMaker
 */
class CubeMaker extends CuboidMaker {

  /**
   * Creates a cube
   * @param {number} side the length of a cube's side
   */
  constructor(side) {
    super({ width: side, height: side, length: side });

    /** @member {number} the cube's side length */
    this.side = side;
  }

  /**
   * Get the volume of the cube
   * @returns {number} the volume
   */
  volume() {
    return this.side * this.side * this.side;
  }

  /**
   * Get the surface area of the cube
   * @returns {number} the surface area
   */
  surfaceArea() {
    return 6 * this.side * this.side;
  }
}

const cube = new CubeMaker(1);
console.log(cube.volume());  // volume of a 1x1x1 cube = 1
console.log(cube.surfaceArea());  //surface area of a 1x1x1 cube = 6




/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo() {
  //console.log('its working');
  return 'bar';
}
export default {
  foo,
  summation,
  animalNames,
  lowerCaseNames,
  lowPopulationAnimals,
  USApop,
  consume,
  add,
  multiply,
  greeting,
  CuboidMaker,
  CuboidMakerTwo
}
