/*
Types of functions
1. default function
2. parameterized function
3. arrow function
4. closure
5. IFFES (Immediately Invoked Function Expression)
6. recrusive function
7. inline function
8. anonymous function
9. callback function
10.pure function
11.implicit function
12.explicit function
 */

// 1. Default function || It is used in pagination
//name bitra ko name ma user pathako xa tessaile default.
const defaultFunc = (name = "user") => {
  console.log(`Hello ${name}`);
};
defaultFunc("Hello Viewer");
defaultFunc();

// 2. Parameterized function || 2ta bhanda value badi xa bhani use hunxa
const sum = ({ a, b, c, d }) => {
  console.log(a + b);
};
sum({ a: 2, b: 3, d: 1, c: 4 });

// 3. Arrow function (=>)
const random = (a, b) => {
  return a + b;
};

// 4. Closure
const mainCounter = () => {
  let count = 0; // Declared outside the function because it help the counter to con. from the return value.
  // yo [return () =>{}] le jaba maincounter lai call garxam tyo call garye ko variable lai counter banaunxa.
  return () => {
    count = count + 1;
    return count;
  };
};
const count1 = mainCounter(); // New Year counter
const count2 = mainCounter(); // Holiday counter

console.log(count1());
console.log(count1());

console.log(count2());
console.log(count2());

// 5. IFFES (Immediately Invoked Function Expression) || developer 1 time setup data base, (db seeding)
// function bhanne kura define garye ko xa bhani [functional expression].
((name) => {
  console.log(`Hello ${name}`);
})("ankit"); // parameter pass

// 6. Resursive function
// Afule aafai lai call garye ko garye garxa.
//factorial of 5 [5*4*3*2*1]
const factorial = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

const fact = factorial(5);
console.log(fact);

// 7. Inline function |[=> function] an function lai value ma assign garyo bhani inline function bhanxa.
// self contain, bahira hbako variable sanga jut dai na.
const hello = () => {
  const d = 1;
  console.log({ d });
};

//ES5
const d = "siuu";
//yes ma bahira ko content (siuu) judi ra xa kina bhanye ES5. yo self contain funcation bhaye na.
function hello2() {
  console.log({ d });
}
hello();
hello2();

// 8. Anonymous function | gobal function.
(a) => {
  console.log({ a });
};

// 9. Callback function[function inside function as parameter]
//argument(print) funtion for the parent.kasari bhayo bhanda jaba line no 104 ma parent bhanye ra call/execute garyem tyti bela euta function mag xa ani tyo function ko ho bhanye ra mag da print bhanye ra pathaunxam.
const print = (data) => {
  console.log({ data });
};
const parent = (func) => {
  const num = "ankit";
  func(num); //print num
};

parent(print); // function bhitra function.

// 10. Pure function [1 ta fixed value pathuada, tyo fixed value operation garye ra same result lai pure function ]
//utiliy function is known as the pure function. E.G = in google while searching smthing some website are shown and in the below some thing is written and then after is shows .... it is called pure function
const upperConverter = (text) => {
  console.log(text.toUpperCase());
};
upperConverter("ankit");

// 11. Implicite function [single line logic xa bhani implicit function ma change garna milxa]
const sum0 = (a, b) => {
  return a + b;
};

const summa = (a, b) => a + b;
console.log(summa(2, 4));

// 12. Explicite function [yes lai explicite bhanxa.]
// if there is return it is known as 'EXPLICITE FUNCTION'
// if there is noreturn it is know as 'IMPLICITE FUNCTION'
const sum1 = (a, b) => {
  return a + b;
};
