// Instructions from your teacher:
// Write a function called "removeNumbersLessThan".

// Given a number and an object, "removeNumbersLessThan" removes any properties whose values are numbers less than the given number.

var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
removeNumbersLessThan(5, obj);
console.log(obj); // --> { a: 8, c: 'montana' }


function removeNumbersLessThan(num, obj) {
  for (val in obj){
  	if ( (typeof(obj[val]) === 'number') && (obj[val] < num) ){
  		delete obj[val];
  	}
  }
}