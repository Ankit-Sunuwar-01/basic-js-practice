// 1.Write a JavaScript function that reverses a number.
// Example x = 32243; Expected Output : 34223

// A.) Using for method
const reversesOld = (num) => {
  const text = String(num);
  const len = text.length;
  let newValue = "";
  for (let i = len - 1; i >= 0; i--) {
    newValue += text[i];
  }
  return newValue;
};

const result = reversesOld(32243);
console.log({ result });

// B.) Using split method
const reversesNew = (num) => {
  const text = String(num);
  const splitData = text.split(""); // ["3", "2", "2", "4", "3"]
  const reversedData = splitData.reverse().join("");
  console.log({ reversedData });
  return reversedData;
};
reversesNew(32243);

// C.) Using implicit function || Function chaining
const reversesZ = (num) => String(num).split("").reverse().join("");
const resultZ = reversesZ(32243);
console.log({ resultZ });

// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant,
// we do not count 'y' as vowel here.
// Example string : 'The quick brown fox' Expected Output : 5

const vowel = (sentence) => {
  let count = 0;
  const text = sentence.toLowerCase();
  for (let i = 0; i <= text.length - 1; i++) {
    if (
      text[i] === "a" ||
      text[i] === "e" ||
      text[i] === "i" ||
      text[i] === "o" ||
      text[i] === "u"
    ) {
      count++;
    }
  }
  return count;
};
const show = vowel("The quick brown fox");
console.log({ show });

//3. Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not.
const isPrime = (num) => {
  if (num < 2) return false; // 0 and 1 are not prime numbers
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const siuu = isPrime(4);
console.log({ siuu });

//4. Write a JavaScript function to get the number of occurrences of each letter in a specified string.
const countLetters = (word) => {
  const text = word.toLowerCase();
  const letters = text.split("");
  const count = {};
  for (let i = 0; i <= letters.length - 1; i++) {
    if (count[letters[i]]) {
      count[letters[i]] += 1; // If the letter is already counted, increase its count by 1
    } else {
      count[letters[i]] = 1; // If the letter is not counted yet, set its count to 1
    }
  }
  return count;
};
const a = countLetters("hello world");
console.log({ a });

//5. Write a JavaScript function to find the first not repeated character. Sample arguments : 'abacddbec' Expected output : 'e'
function firstNonRepeatedChar(str) {
  // Create an empty object to store the count of each character
  const count = {};

  // Loop through the string to count occurrences of each character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // Increment the count of the character
    count[char] = (count[char] || 0) + 1;
  }

  // Loop through the string again to find the first character with a count of 1
  for (let i = 0; i < str.length; i++) {
    if (count[str[i]] === 1) {
      return str[i]; // Return the first non-repeated character
    }
  }

  return null; // If no non-repeated character is found, return null
}

// Sample usage
const input = "abacddbec";
const c = firstNonRepeatedChar(input);
console.log({ c }); // Expected output: 'e'

// 6. Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output. Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"]) Expected output : "United States of America"

const findLongestCountryName = (countries) => {
  let longestName = "";
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].length > longestName.length) {
      longestName = countries[i];
    }
  }
  return longestName;
};
const countries = ["Australia", "Germany", "United States of America"];
console.log(findLongestCountryName(countries));

// 7. Write a function findSquare() returns the square of the input number which is passed as an argument in the function call.
const findSquare = (num) => {
  return num * num;
};
const z = findSquare(4);
console.log(z);

// 8. Write a function to calculate compound interest based on the principle amount
const calculateCompoundInterest = (P, r, t) => {
  const A = P * (1 + r) ** t;
  const CI = A - P;
  return CI;
};

const principal = 20000;
const rate = 0.03;
const time = 5;

console.log(
  "Compound Interest:",
  calculateCompoundInterest(principal, rate, time)
);

//9. Write a js function that convert full name to proper case Eg: Ankit Sunuwar => Ankit Sunuwar
const toProperCase = (name) => {
  // Split the name into an array of words
  const words = name.split(" ");

  const properCaseName = words.map((word) => {
    // Capitalize the first letter and make the rest lowercase
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return properCaseName.join(" ");
};

const fullName = "ankit sunuwar";
const properCaseName = toProperCase(fullName);
console.log(properCaseName);

//10. Write a implicit js function that formats the number in following format. 10000 => 10,000 1000000 =>10,000,000
const formatNumber = (number) => number.toLocaleString();

console.log(formatNumber(10000));
console.log(formatNumber(1000000));
