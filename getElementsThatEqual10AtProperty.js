// Instructions from your teacher:
// Write a function called "getElementsThatEqual10AtProperty".

// Given an object and a key, "getElementsThatEqual10AtProperty" returns an array containing all the elements of the array located at the given key that are equal to ten.

// Notes:
// * If the array is empty, it should return an empty array.
// * If the array contains no elements equal to 10, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

var obj = {
  key: [1000, 10, 50, 10]
};


function getElementsThatEqual10AtProperty(obj, key) {
  var equalToTenArray = [];
  if ( obj[key] === [] || !Array.isArray(obj[key]) ){
  	return equalToTenArray;
  }
  for (var i = 0; i < obj[key].length; i++){
  	if(obj[key][i] === 10){
  		equalToTenArray.push(obj[key][i]);
  	}
  }
  return equalToTenArray;
}

var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]