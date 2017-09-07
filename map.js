// map.js

function map(arr, cb) {
  var output = [];
  for (var i = 0; i < arr.length; i++) {
    output.push(cb(arr[i], i, arr));
  }
  return output;
}