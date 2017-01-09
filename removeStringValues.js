// Instructions from your teacher:
// Write a function called "removeStringValues".

// Given an object, "removeStringValues" removes any properties on the given object whose values are strings.

var obj = {
  name: 'Sam',
  age: 20
}
removeStringValues(obj);
console.log(obj); // { age: 20 }


function removeStringValues(obj) {
  for (val in obj){
  	if (typeof(obj[val]) === 'string'){
  		delete obj[val];
  	}
  }
}