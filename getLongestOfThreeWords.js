// Instructions from your teacher:
// Write a function called "getLongestOfThreeWords".

// Given 3 words, "getLongestOfThreeWords" returns the longest of three words. 

// Notes:
// * If there is a tie, it should return the first word in the tie.

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'

function getLongestOfThreeWords(word1, word2, word3) {
	var arr = [];
	arr.push(word1,word2,word3);
	length = 0;
	word = '';
	arr.forEach(function(val){
		if (val.length > length){
			length = val.length;
			word = val;
		}
	})
	return word;
}