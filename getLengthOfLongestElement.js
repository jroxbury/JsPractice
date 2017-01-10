// Instructions from your teacher:
// Write a function called "getLengthOfLongestElement".

// Given an array, "getLengthOfLongestElement" returns the length of the longest string in the given array.

// Notes:
// * It should return 0 if the array is empty.

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5

function getLengthOfLongestElement(arr) {
	if(!arr.length){return 0;}

	return arr.reduce(function(trail, val){
		if (trail.length > val.length){
			return trail = trail.length;
		} else if (val.length > trail.length) {
			return trail = val.length;
		} else {
			return trail
		}
	})
}