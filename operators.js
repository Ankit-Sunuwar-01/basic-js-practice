/*
# Operators
1.) AND (&) [Both condition must be true]
condition 1 && condition 2;
true & false

2.) OR (||) [any 1 condition must be satisfy]
condition 1 || conditon 2;

3.) NOT (!) [opposite value] 
 */

//Example:
// 1.) AND
// const age = Number(prompt("Enter Your Age:"));
// const under18 = true;
// if (age >= 18 && under18) {
//   console.log("Your are eligible for a Voter Card");
// } else {
//   console.log("You are not eligible for Voter Card");
// }

// 2.) OR
// const Saturday = true;
// const Sunday = false;
// if (Saturday || Sunday) {
//   console.log("You can take a break!");
// } else {
//   console.log("You have to work!");
// }

// 3.) NOT
const gender = "m";
if (!gender) {
  console.log("m");
} else {
  console.log("f");
}
