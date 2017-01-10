// Instructions from your teacher:
// Write a function called "getStringLength".

// Given a string, "getStringLength" returns the length of the given string.

// Notes:
// * Do NOT use any native 'length' methods.
// * You might consider using 'substring' or 'slice' as alternatives.

var output = getStringLength('hello');
console.log(output); // --> 5

function getStringLength(string) {
	var strArr = string.split("");
	return strArr.reduce(function(trail,val){
		return trail += 1;
	},0)
}