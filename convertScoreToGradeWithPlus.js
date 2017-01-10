// Instructions from your teacher:
// Write a function called "convertScoreToGradeWithPlusAndMinus".

// Given a score, "convertScoreToGradeWithPlusAndMinus" returns a string representing the letter grade corresponding to the given score.

// Notes:
// * (100 - 90) --> 'A'
// * (89  - 80) --> 'B'
// * (79  - 70) --> 'C'
// * (69  - 60) --> 'D'
// * (60  -  0) --> 'F'
// * If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
// * If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a '-'
// * If the score is be the 8 and 9 (inclusive) of a given range, return the letter with a '+'
// * There are is no F+ and there is no F-.

var output = convertScoreToGradeWithPlusAndMinus(60);
console.log(output); // --> 'A-'

function convertScoreToGradeWithPlusAndMinus(score) {
	if(score < 0 || score > 100){
		return 'INVALID SCORE';
	}
	grade = '';
	if (score <= 100 && score >= 90){
		grade = 'A';
	}else if (score <= 89 && score >= 80){
		grade = 'B';
	}else if (score <= 79 && score >= 70){
		grade = 'C';
	}else if (score <= 69 && score >= 60){
		grade = 'D';
	}else{
		return 'F';
	}

	var numArr = score.toString().split("");
	var sign = parseInt(numArr[1]);
	var minus = false;
	var plus = false;
	
	if(sign === 0 || sign === 1 || sign === 2){
		minus = true;
	}else if (sign === 8 || sign === 9){
		plus = true;
	}


	if (score === 100){
		return grade + "+";
	}else if(minus){
		return grade + "-";
	}else if (plus){
		return grade + "+";
	}else {
		return grade;
	}

}
