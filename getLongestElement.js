// Instructions from your teacher:
// Write a function called "getLongestElement".

// Given an array, "getLongestElement" returns the longest string in the given array.

// Notes:
// * If there are ties, it returns the first element to appear.
// * If the array is empty, tt should return an empty string.

var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'

function getLongestElement(arr) {
  if (!arr.length){return ''};
  var longestString = '';
  arr.forEach(function(val){
  	if (val.length > longestString.length){
  		longestString = val;
  	}
  })
  return longestString;
}