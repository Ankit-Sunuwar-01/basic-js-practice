//User Interation

/*
1. prompt = Ask the input information from the users.
2. confirm = It confirm the the input given by the user to the user.
3. alert = It display the output given by the user with the ans, using dynamic
 */

//Example:
// Write a js program to create multiplication calculator using user interaction.

//Prompt
const num1 = Number(prompt("Enter the First Number:"));
const num2 = Number(prompt("Enter the Second Number:"));
const multiply = num1 * num2;

//Confirm
const sure = confirm("Do you want to multiply these two numbers?");

//Alert
alert(`Your multiplication of two number is ${multiply}`);
