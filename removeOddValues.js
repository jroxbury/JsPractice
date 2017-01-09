// Instructions from your teacher:
// Write a function called "removeOddValues".

// Given an object, "removeOddValues" removes any properties whose valuse are odd numbers.

var obj = {
  a: 2,
  b: 3,
  c: 4
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }

function removeOddValues(obj) {
  for (val in obj){
  	if (obj[val] % 2){
  		delete obj[val];
  	}
  }
}