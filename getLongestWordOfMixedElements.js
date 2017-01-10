// Instructions from your teacher:
// Write a function called "getLongestWordOfMixedElements".

// Given an array of mixed types, "getLongestWordOfMixedElements" returns the longest string in the given array.

// Notes:
// * If the array is empty, it should return an empty string (""). 
// * If the array contains no strings; it should return an empty string.

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'

function getLongestWordOfMixedElements(arr) {
  if(!arr.length){return "";}
  var longestWord = '';
  arr.forEach(function(val){
  	if ( (typeof(val) === 'string') && (val.length > longestWord) ){
  		longestWord = val;
  	}
  })
  return longestWord;
}