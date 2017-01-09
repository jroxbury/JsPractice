// Instructions from your teacher:
// Write a function called "getSmallestElementAtProperty".

// Given an object and a key, "getSmallestElementAtProperty" returns the smallest element in the array located at the given key. 

// Notes:
// * If the array is empty, it should return undefined.
// * If the property at the given key is not an array, it should return undefined. 
// * If there is no property at the key, it should return undefined.

var obj = {
  key: [2, 1, 5]
};
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1

function getSmallestElementAtProperty(obj, key) {
  if (obj[key] && obj[key].length && Array.isArray(obj[key]) ){

  	return obj[key].reduce(function(smallest,val,currentIndex){
  		if (currentIndex === 0){
  			return smallest = val;
  		}else if (val < smallest){
  			return smallest = val;
  		}else{
  			return smallest;
  		}
  	},0);
  } else {
  	return undefined;
  }
}