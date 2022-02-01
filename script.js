console.log('Привет Github');

// Первая задача
function solution(str) {
	return str.split('').reverse().join('')
}

// Вторая задача
function booleanToString(b) {
	if (b === true) {
		return 'true'
	} else if (b === false) {
		return 'false'
	}
}

// Третья задача
function boolToWord(bool) {
	if (bool == true) {
		return 'Yes'
	} else if (bool == false) {
		return 'No'
	}
}


function arrayPlusArray(arr1, arr2) {
	let sum1 = 0;
	let sum2 = 0
	for (let elem of arr1) {
		sum1 += elem
	};
	for (let elem of arr2) {
		sum2 += elem
	};
	return sum1 + sum2;
}