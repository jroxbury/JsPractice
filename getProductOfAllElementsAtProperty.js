// Instructions from your teacher:
// Write a function called "getProductOfAllElementsAtProperty".

// Given an object and a key, "getProductOfAllElementsAtProperty" returns the product of all the elements in the array located at the given key. 

// Notes:
// * If the array is empty, it should return 0.
// * If the property at the given key is not an array, it should return 0.
// * If there is no property at the given key, it should return 0.

var obj = {
  key: [1, 2, 3, 4]
};
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24

function getProductOfAllElementsAtProperty(obj, key) {
  if ( obj[key] && obj[key].length && Array.isArray(obj[key]) ){
  	return obj[key].reduce(function(trail,val,index){
  		if( index === 0 ){
  			return trail = val;
  		} else {
  			return trail * val;
  		}
  	},0);
  } else {
  	return 0;
  }
}