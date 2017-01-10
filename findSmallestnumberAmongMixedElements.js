// Instructions from your teacher:
// Write a function called "findSmallestNumberAmongMixedElements".

// Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.

// Notes:
// * If the given array is empty, it should return 0.
// * If the array contains no numbers, it should return 0.

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4

function findSmallestNumberAmongMixedElements(arr) {
  if (!arr.length){return 0;}
  var smallestNum;
  arr.filter(function(val){
  	if( typeof(val) === 'number' && smallestNum === undefined){
  		smallestNum = val;
  	}else if ( typeof(val) === 'number' && val < smallestNum ){
  		smallestNum = val;
  	}
  })

  if (smallestNum === undefined){
  	return 0;
  } else {
  	return smallestNum;
  }

}