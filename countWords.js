function countWords(str) {
  var wCount = {};
  if (str === ''){
      return wCount;
  }
  var wordArray = str.split(' ');
  var i = 0;
  for( ; i < wordArray.length; i++){
      if (wordArray[i] in wCount){
          wCount[wordArray[i]] += 1;
      }else {
          wCount[wordArray[i]] = 1;
      }
  }
  return wCount;
}

var output = countWords('ask a bunch get a bunch'); 

console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}