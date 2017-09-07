// The second argument/parameter is expected to be a function
function findWaldo(arr, check) {
  arr.forEach(check)
};

function checkIfFound(name, j, names) {
  if (name === "Waldo") {
    console.log('Found Waldo at index',j,'!');
  }
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], checkIfFound);
