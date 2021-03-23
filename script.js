// zet de functie om naar een arrow functie
const ikRockArrowFunctions = function () {
  console.log("Joe, ik rock de arrow functions!");
};

ikRockArrowFunctions();

// deel A
let ikRockArrowFunctions2 = () =>
  console.log("Joe, ik rock de arrow functions!");
ikRockArrowFunctions2();

const fivePlusSeven = function () {
  return 5 + 7;
};

console.log(fivePlusSeven());

// deel B
let fivePlusSeven2 = () => 5 + 7;
console.log(fivePlusSeven2());

//  deel C
let myFunction = (a, b) => a + b;
console.log(myFunction(9, 10));

//  deel D
let addFive = (a) => a + 5;
console.log(addFive(6));

//  deel E
let createObject = () => {
  greeting: "hoi";
};
console.log(createObject());
