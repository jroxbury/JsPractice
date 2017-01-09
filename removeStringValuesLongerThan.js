// Instructions from your teacher:
// Write a function called "removeStringValuesLongerThan".

// Given an number and an object, "removeStringValuesLongerThan" removes any properties on the given object whose values are strings longer than the given number.

var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};
removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }

function removeStringValuesLongerThan(num, obj) {
  for (str in obj){
  	if (typeof(obj[str]) === 'string' && obj[str].length > num){
  		delete obj[str];
  	}
  }
}