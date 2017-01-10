// Instructions from your teacher:
// Write a function called "isOddWithoutModulo".

// Given a number, "isOddWithoutModulo" returns whether the passed in number is odd.

// Note:
// * It does so without using the modulo operator (%). 
// * It should work for negative numbers and zero.

var output = isOddWithoutModulo(-17);
console.log(output); // --> true

function isOddWithoutModulo(num) {
	if (!num){return false;}
	if (Math.round(num / 2) === (num / 2) ){
		return false;
	}else{
		return true;
	}
}