// Instructions from your teacher:
// Write a function called "findShortestOfThreeWords".

// Given 3 strings, "findShortestOfThreeWords" returns the shortest of the given strings.

// Notes:
// * If there are ties, it should return the first word in the parameters list.

var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'

function findShortestOfThreeWords(word1, word2, word3) {
  var arr = [];
  arr.push(word1,word2,word3);

  var length;
  var word = '';

  arr.forEach(function(val){
  	if (length === undefined){
  		length = val.length;
  		word = val;
  	}else if (val.length < length){
  		length = val.length;
  		word = val;
  	}
  })

  return word;
}