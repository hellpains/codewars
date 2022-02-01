console.log('Привет Github');

// Первая задача-1
function solution(str) {
	return str.split('').reverse().join('')
}

// Вторая задача-2
function booleanToString(b) {
	if (b === true) {
		return 'true'
	} else if (b === false) {
		return 'false'
	}
}

// Третья задача-3
function boolToWord(bool) {
	if (bool == true) {
		return 'Yes'
	} else if (bool == false) {
		return 'No'
	}
}

//-----------------------задача-4
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

//-----------------------задача-5
function stringToArray(string) {
	return string.split(' ')
}


//-----------------------задача-6
function positiveSum(arr) {
	let sum = 0;
	for (let elem of arr) {
		if (elem >= 0) {
			sum += elem;
		}
	}
	return sum;
}


//-----------------------задача-7
function findNeedle(haystack) {
	if (haystack.includes("needle")) {
		return "found the needle at position " + haystack.indexOf("needle")
	}
}


//-----------------------задача-8


//-----------------------задача-9


//-----------------------задача-10


//-----------------------задача-11


//-----------------------задача-12


//-----------------------задача-13


//-----------------------задача-14