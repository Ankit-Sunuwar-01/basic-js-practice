// Array, collection of items
// CRUD

// Create
const bikes = [
  { name: "Honda", model: 2021 },
  { name: "Ninja", model: 2022 },
  { name: "Yamaha", model: 2023 },
];

// Read
console.log(bikes[0]);

// Update
const copyOfBikes = [...bikes];
bikes[0].name = "Tata";
console.log({ bikes });

// Delete
const [z, ...rest] = bikes;
console.log({ rest });

// Array methods
// map, filter, reduce, slice, splite, some, every, includes, find

const peoples = [
  { name: "Ankit", age: 19 },
  { name: "Kabita", age: 50 },
  { name: "Sandip", age: 25 },
];

const ageSorter = (arr) => {
  return arr.sort((a, b) => a.age - b.age);
};

const result = ageSorter(peoples);
console.log({ result });
