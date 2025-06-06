// ! Exercise 1:
// a. Use the `map()` method to iterate over the provided `nums` array
// b. Create a new array where each value is multiplied by 2, named `numsTimesTwo`
// c. Console log the new array.

const nums = [13, 87, 2, 89, 12, 4, 90, 63];
const numsTimesTwo = nums.map(num => num * 2);
console.log("Exercise 1 - numsTimesTwo:", numsTimesTwo);
// Output: [26, 174, 4, 178, 24, 8, 180, 126]


// ! Exercise 2:
// a. Destructure the first and second values of `pizzaToppings`
// b. Name them `firstIngredient` and `secondIngredient`
// c. Console log both

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
const [firstIngredient, secondIngredient] = pizzaToppings;

console.log("Exercise 2 - firstIngredient:", firstIngredient);   // Pineapple
console.log("Exercise 2 - secondIngredient:", secondIngredient); // Olives


// ! Exercise 3:
// a. Destructure `make` and `model` from the car object
// b. Console log both

const car = {
  make: 'Audi',
  model: 'Q5',
};

const { make, model } = car;

console.log("Exercise 3 - make:", make);   // Audi
console.log("Exercise 3 - model:", model); // Q5

// ! Exercise 4:
// a. Duplicate the array `morePizzaToppings` using the spread operator
// b. Store it in `uncontroversialPizzaToppings` and console log it

const morePizzaToppings = ['Cheese', 'Sauce'];
const uncontroversialPizzaToppings = [...morePizzaToppings];

console.log("Exercise 4 - uncontroversialPizzaToppings:", uncontroversialPizzaToppings);
// Output: ['Cheese', 'Sauce']

// ! Exercise 5:
// a. Clone `anotherCar` into `myCar` using the spread operator
// b. Change `make` and `model` in `myCar`
// c. Log both to confirm changes

const anotherCar = {
  make: 'Toyota',
  model: 'RAV4',
};

const myCar = { ...anotherCar };
myCar.make = 'Honda';
myCar.model = 'Civic';

console.log("Exercise 5 - anotherCar:", anotherCar); // { make: 'Toyota', model: 'RAV4' }
console.log("Exercise 5 - myCar:", myCar);           // { make: 'Honda', model: 'Civic' }


// ! Exercise 6:
// a. Define a variable `propertyName`
// b. Create an object `userProfile` using `propertyName` as key
// c. Console log the object

const propertyName = 'username';
const userProfile = {
  [propertyName]: 'Jesust9140'
};

console.log("Exercise 6 - userProfile:", userProfile);
// Output: { username: 'Jesust9140' }


export default 'Matt';
export const computer = 'MacBook Pro';

const age = 43;
const job = 'programmer';
export { age, job };


// ! Exercise 8:
// a. Create a function with default parameters `noun = 'cat'` and `adjective = 'orange'`
// b. Log the sentence using a template string

function describeAnimal(noun = "cat", adjective = "orange") {
  console.log(`Exercise 8 - The ${noun} is ${adjective}.`);
}

describeAnimal();               // The cat is orange.
describeAnimal('dog', 'brown'); // The dog is brown.


// ! Exercise 9:
// Convert this:
// if (pizza === 'tasty') {
//   console.log('yum');
// } else {
//   console.log('yuck');
// }

const pizza = 'tasty';
console.log("Exercise 9 -", pizza === 'tasty' ? 'yum' : 'yuck');


// ! 10.1
const localLangConfig = null;
const lang = localLangConfig || 'en';

console.log("Exercise 10.1 - lang:", lang); // en

// ! 10.2
const savedUserTheme = null;
const theme = savedUserTheme || 'light';

console.log("Exercise 10.2 - theme:", theme); // light


// ! Exercise 11:
// a. Use optional chaining in a console.log so that a console log of
//    `adventurer.cat.age` returns `undefined` instead of an error.
//
// Starting code (don't modify this):

const adventurer = {
  name: 'Alice',
};

// Your code here:

