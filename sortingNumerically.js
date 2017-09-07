// sortingNumerically.js

function findMin(arr) {
  var index = 0;
  var value = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < value) {
      value = arr[i];
      index = i;
    }
  }
  return [value, index];
}

function sortNumerically(arr) {
  var outputArr = [];
  tempMin = 0;
  while (arr.length > 0){
    var val = findMin(arr)[0];
    var j = findMin(arr)[1];
    arr.splice(j, 1);
    outputArr.push(val);
  }
  return outputArr;
}

var array = [10, 2, 5, 1, 9];
console.log(sortNumerically(array));

// console.log(findMin([1,2,3,4])[0],findMin([1,2,3,4])[1]);
