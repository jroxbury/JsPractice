// Instructions from your teacher:
// Write a function called "countCharacter".

// Given a string input and a character, "countCharacter" returns the number of occurences of a given character in the given string.

var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3

function countCharacter(str, char) {
  var letterArray = str.split("");
  return letterArray.reduce(function(trail,val){
  	return val === char ? trail += 1 : trail;
  },0)
}