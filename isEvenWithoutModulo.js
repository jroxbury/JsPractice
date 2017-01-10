// Instructions from your teacher:
// Write a function called "isEvenWithoutModulo".

// Given a number, "isEvenWithoutModulo" returns whether it is even. 

// Notes:
// * It does so without using the modulo operator (%). 
// * It should work for negative numbers and zero.

var output = isEvenWithoutModulo(8);
console.log(output); // --> true

function isEvenWithoutModulo(num) {
	if(num === 0){return true;}

	if(Math.round(num/2) === (num/2)){
		return true;
	}else{
		return false;
	}
}