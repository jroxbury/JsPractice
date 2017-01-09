// Instructions from your teacher:
// Write a function called "removeNumberValues".

// Given an object, "removeNumberValues" removes any properties whose valuse are numbers.

var obj = {
  a: 2,
  b: 'remaining',
  c: 4
};
removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }


function removeNumberValues(obj) {
  for(val in obj){
  	if (typeof(obj[val]) === 'number'){
  		delete obj[val];
  	}
  }
}