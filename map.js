// map.js

function map(arr, cb) {
  var output = [];
  for (var i = 0; i < arr.length; i++) {
    output.push(cb(arr[i], i, arr));
  }
  return output;
}

var words = ["ground", "control", "to", "major", "tom"];

var output1 = map(words, function(word) {
  return word.length;
});

var output2 = map(words, function(word) {
  return word.toUpperCase();
});

var output3 = map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(words);
console.log(output1);
console.log(output2);
console.log(output3);

