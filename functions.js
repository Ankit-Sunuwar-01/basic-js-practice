/* 
Function are the main building block of any program. They are defined using the function keyword, followed by a name, a list of parameters, and a block of any program.
 
2. Core principles of functions 
a. DRY (Don't Repeat Yourself)
b. SOC (Separation of Concerns)
*/

// 2 ways to write function
//ES5
// write a sum function for adding 2 numbers
function sum(a, b) {
  const c = a + b;
  return c; // Return the value of c to the caller for Reusability
}
// function call/execute
const result = sum(5, 7);
console.log({ result });

// js function for finding square of a number
// 2 => 4
// 4 => 16
function square(num) {
  return num * num;
}
//function call/execute
const ans = square(Number(prompt("Enter the number:")));
console.log({ ans });

//ES6 [ () => {} ]
const sq = (num) => {
  return num * num;
};
const newAns = square(4);
console.log({ newAns });
