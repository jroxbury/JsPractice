var input = {
  name: 'Holly',
  age: 35,
  role: 'producer'
}
var expected = [['name', 'Holly'], ['age', 35], ['role', 'producer']]

function convertObjectToList(obj) {
	var output = [];

	for (x in obj){
		var temp = [];
		temp.push(x,obj[x])
		output.push(temp)
	}

	return output
}

console.log(convertObjectToList(input))