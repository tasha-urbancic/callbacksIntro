// extractListProps.js

// data
var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

// these are too specific,
// want to be more general for all properties
function returnName(a) {
  return a.name;
}

function returnAge(a) {
  return a.age;
}

// this is more general
function prop(propertyName) {
  return function(obj)
  {
    return obj[propertyName];
  }
}

// prop('name') returns a function which takes
// an object and extracts the property name
// how does the innerFunction prop('name')
// know what propertyName is?
// const names = students.map(prop('name'))
// const ages = students.map(prop('age'))

// student['name'] all of the names in a list
objArray.map(prop('name'));
objArray.map(prop('age'));


