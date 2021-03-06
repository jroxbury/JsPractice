// Instructions from your teacher:
// Write a function called "keep".

// Given an array and a keeper element, "keep" returns an array containing the items that match the given keeper element.

// Notes:
// * If no elements match, "keep" should return an empty array.

var output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); // --> [2, 2]

function keep(array, keeper) {
  return array.filter(function(val){
  	return val === keeper;
  })
}