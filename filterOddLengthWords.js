// Instructions from your teacher:
// Write a function called "filterOddLengthWords".

// Given an array of string, "filterOddLengthWords" returns an array containing only the elements of the given array whose lengths are odd numbers.

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']

function filterOddLengthWords(words) {
  return words.filter(function(val){
  	return val.length % 2;
  })
}