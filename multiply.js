// Instructions from your teacher:
// Write a function called "multiply".

// Given 2 numbers, "multiply" returns their product.

// Notes:
// * It should not use the multiply operator (*).\

var output = multiply(4, 7);
console.log(output); // --> 28

function multiply(num1, num2) {
	var total = 0;
	while(num1){
		total += num2;
		num1 -= 1;
	}
	return total;
}