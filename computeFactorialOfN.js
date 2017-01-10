// Instructions from your teacher:
// Write a function called "computeFactorialOfN".

// Given a natural number (a whole number greater than 0), "computeFactorialOfN" returns its factorial.

var output = computeFactorialOfN(3);
console.log(output); // --> 6

var output = computeFactorialOfN(4);
console.log(output); // --> 24

function computeFactorialOfN(n) {
	var numArr = [];
	while(n > 0){
		numArr.push(n);
		n -= 1;
	}
	return numArr.reduce(function(trail, val){
		return trail * val;
	})
}