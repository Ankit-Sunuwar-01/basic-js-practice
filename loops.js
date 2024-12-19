/*
for
do while
while
*/

// For (Syntax)
// for(begin; step condition; increase begin step){
//     // code to be executed
// }

// Write a js program for multiplication table.

const table = Number(prompt("Enter the number for table:"));
if (!table) {
  alert("You didn't enter the number");
}
for (let i = 1; i <= 10; i++) {
  // (i++ / i=i+1 / i+=1) unary operator
  console.log(`${table}*${i}=${table * i}`);
}

/* 2.)do while
begin step
do{
code execution 
increase begin step
} while(step condition)
 */

// const table = Number(prompt("Enter the number for table:"));
// if (!table) {
//   alert("You didn't enter the number");
// }
// let i = 1;
// do {
//   console.log(`${table}*${i}=${table * i}`);
//   i++;
// } while (i <= 10);

/* 3.)while
begin step
while(step condition){
code execution
increase begin step
} */
// const table = Number(prompt("Enter the number for table:"));
// if (!table) {
//   alert("You didn't enter the number");
// }
// let i = 1;
// while (i <= 10) {
//   console.log(`${table}*${i}=${table * i}`);
//   i++;
// }
