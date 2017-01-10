// Instructions from your teacher:
// Write a function called "repeatString".

// Given a string and a number, "repeatString" returns the given string repeated the given number of times.

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'

function repeatString(string, num) {
	var repeatStr = '';
	while(num > 0){
		repeatStr += string;
		num -= 1;
	}
	return repeatStr;
}