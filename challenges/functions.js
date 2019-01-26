// ==== Callbacks ====  

"use strict";

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

const consume = (x, y, cb) => {
  return cb(x, y);
};


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns
    "Hello first-name last-name, nice to meet you!"
*/

const add = (a, b) => a + b;

const multiply = (a, b) => a * b;

const greeting = (fn, ln) => `Hello ${fn} ${ln}, nice to meet you!`;


/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 

// When nestedfunction is created, its closure includes variables defined in
// the outer environment that nestedfunction uses -- which in this case is just
// the variable 'internal'.  It's not really illustrated by this particular
// example, but even after myFunction goes out of scope, if we still had access
// to nestedFunction it would still be able to access its copy of 'internal'

// actually, let's see that in action...

const external = "I'm outside the function";
const internal = "My name is a lie!";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }

  return nestedFunction;
}


const nested = myFunction();

console.log(internal);

nested();
