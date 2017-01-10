// Instructions from your teacher:
// Write a function called "modulo".

// Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2.

// It should behave as described in the canonical documentation (MDN) for the JavaScript remainder operator:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()

// Notes:
// * Do NOT use the actual built-in modulo (aka "remainder") operator (%) in your implementation.
// * 0 % ANYNUMBER = 0.
// * ANYNUMBER % 0 = NaN.
// * If either operand is NaN, then the result is NaN.
// * Modulo always returns the sign of the first number.

var output = modulo(5, 1.5);
console.log(output); // --> 1

function modulo(num1, num2) {
  if(num1 === NaN || num2 === NaN){
  	return NaN;
  }
  if (num1 === 0){
  	return 0;
  }else if(num2 === 0){
  	return NaN;
  }else{
  	var n = num1 / num2;
  	if (parseInt(n) === n){
  		return 0
  	}else{
  		var negative = false;
  		if (num1 < 0){
  			var negative = true;
  		}
  		var decPart = (n+"").split(".")[1];
  		var remainder =  num2 * ('0.' + decPart);
  		if(!(Math.round(num1) === num1) || !(Math.round(num2) === num2) ){
  			return remainder;
  		}
  		remainder = Math.round(remainder);
  		if(negative){
  			return Number("-" + remainder);
  		}else {
  			if (num2 < 0){
  				return (remainder *= -1)
  			}
  			return remainder;
  		}
  	}
  }
}