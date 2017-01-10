// Instructions from your teacher:
// Write a function called "findShortestElement".

// Given an array, "findShortestElement" returns the shortest string within the given array.

// Notes:
// * If there are ties, it should return the first element to appear.
// * If the given array is empty, it should return an empty string.

var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'

function findShortestElement(arr) {
  if (!arr.length){return ''};
  var shortestElem;
  arr.forEach(function(val, index){
  	if(index === 0){
  		shortestElem = val;
  	}
  	if (val.length < shortestElem.length){
  		shortestElem = val;
  	}
  })
  return shortestElem;
}