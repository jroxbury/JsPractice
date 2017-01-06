// Instructions from your teacher:
// Write a function called "countAllCharacters".

// Given a string, "countAllCharacters" returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.

// Notes:
// * If given an empty string, countAllCharacters should return an empty object.



function countAllCharacters(str) {
  var newObj = {}
  if (str === ''){
  	return newObj;
  }
  var strArr = str.split('');
  var i = 0;
  for( ; i < strArr.length; i++ ){
  	if (strArr[i] in newObj){
  		newObj[strArr[i]] += 1;
  	}else {
  		newObj[strArr[i]] = 1;
  	}
  }

  return newObj;
}


var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}