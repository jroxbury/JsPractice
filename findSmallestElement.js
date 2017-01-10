// Instructions from your teacher:
// Write a function called "findSmallestElement".

// Given an array of numbers, "findSmallestElement" returns the smallest number within the given array.

// Notes:
// * If the given array is empty, it should return 0.

var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1

function findSmallestElement(arr) {
 if(!arr.length){return 0;}
 var smallestElem = arr.reduce(function(trail,val){
 	if (trail < val){
 		return trail;
 	}else if (val < trail){
 		return trail = val;
 	}else {
 		return trail;
 	}
 })
 return smallestElem;
}