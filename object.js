// Object, object bhitra function lekh yo bhani teslai "method" bhanxa.
// Complex Data Type => CRUD

// Create

const ankit = {
  name: "Ankit Sunuwar", // property assign in key value
  dob: "2020-02-20",
  gender: "m",
  hasValidLicense: true,
  phone: {
    home: 9812567890, // object bhitra arko object ni send hanna milxa.
    office: 1234567890,
  },
  // ES5
  age: function age() {
    return 2024 - Number(this.dob.split("-")[0]);
  },
  // ES6
  newAge: () => {
    return 2024 - Number(ankit.dob.split("-")[0]);
  },
};

// Read
console.log(ankit.name);
// method
console.log(ankit.age()); //4
console.log(ankit.newAge());

// Update
ankit.name = "Ankit Yata Sunuwar";
console.log({ ankit });

// Delete
delete ankit.dob;
console.log({ ankit });

//Spread Operator [...] / delete garye ko.
//(data ko copy banaye ra khelye ko ho.)
const { newAge, ...rest } = ankit;
console.log({ rest });

// Immutable JS (object / array)
