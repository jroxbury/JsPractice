// Instructions from your teacher:
// Write a function called "findShortestWordAmongMixedElements".

// Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.

// Notes:
// * If there are ties, it should return the first element to appear in the given array.
// * Expect the given array to have values other than strings.
// * If the given array is empty, it should return an empty string.
// * If the given array contains no strings, it should return an empty string.

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three', 'boo']);
console.log(output); // --> 'two'

function findShortestWordAmongMixedElements(arr) {
  if ( arr.length ) {
  	var shortest = '';
  	arr.forEach(function(val){
  		if (shortest === '' && ( typeof(val) === 'string' )){
  			shortest = val;
  		}
  		if ( (typeof(val) === 'string') && val.length < shortest.length ){
  			shortest = val;
  		}
  	})
  	return shortest;
  }else{
  	return '';
  }
}