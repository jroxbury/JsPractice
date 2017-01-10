// Instructions from your teacher:
// Write a function called "getLengthOfShortestElement".

// Given an array, "getLengthOfShortestElement" returns the length of the shortest string in the given array.

// Notes:
// * It should return 0 if the array is empty.

var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3

function getLengthOfShortestElement(arr) {
  if(!arr.length){return 0;}

  return arr.reduce(function(trail, val){
  	if (val.length < trail.length) {
  		return trail = val.length;
  	} else if(trail.length < val.length){
  		return trail = trail.length;
  	} else {
  		return trail;
  	}
  })
}