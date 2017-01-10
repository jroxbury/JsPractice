// Instructions from your teacher:
// Write a function called "getLargestElement".

// Given an array, "getLargestElement" returns the largest number in the given array.

// Notes:
// * It should return 0 if the array is empty.

var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;

function getLargestElement(arr) {
  if (!arr.length){return 0;}
  var largestNum;
  arr.forEach(function(val, index){
  	if (index === 0){
  		largestNum = val;
  	}
  	if (val > largestNum){
  		largestNum = val;
  	}
  })
  return largestNum;
}
