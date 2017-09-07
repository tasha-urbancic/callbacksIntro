// customSorting.js

// data
var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

// console.log('original students', students);

// want to sort in alphabetical order
// same name == go by older age first
students.sort(function(a, b) {
  var nameA = a.name.toLowerCase(); // ignore upper and lowercase
  var nameB = b.name.toLowerCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  if (nameA === nameB) {
    return a.age - b.age;
  }
});

console.log('sorted students', students);




