var test = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];

var expectedResults = [
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]

function transformEmployeeData(array) {
	var newArr = [];
	array.forEach(function(arr){
		var temp = {};
		arr.forEach(function(test){
			for(var i = 0; i < test.length; i++){
				temp[test[0]] = test[1]
			}
		});
		newArr.push(temp);
	});

	return newArr;
}

console.log(transformEmployeeData(test));

