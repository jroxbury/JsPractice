// Instructions from your teacher:
// Write a function called "computeAverageOfNumbers".

// Given an array of numbers, "computeAverageOfNumbers" returns their average. 

// Notes:
// * If given an empty array, it should return 0.

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3

function computeAverageOfNumbers(nums) {
  if (!nums.length){return 0;}
  var sum = nums.reduce(function(trail, val){
  	return trail += val;
  })

  return (sum / nums.length)
}