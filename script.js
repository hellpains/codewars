console.log('Привет Github');

//----------------------------------------------------1
function solution(str) {
	return str.split('').reverse().join('')
}

//----------------------------------------------------2
function booleanToString(b) {
	if (b === true) {
		return 'true'
	} else if (b === false) {
		return 'false'
	}
}

//----------------------------------------------------3
function boolToWord(bool) {
	if (bool == true) {
		return 'Yes'
	} else if (bool == false) {
		return 'No'
	}
}

//----------------------------------------------------4
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

//----------------------------------------------------5
function stringToArray(string) {
	return string.split(' ')
}


//----------------------------------------------------6
function positiveSum(arr) {
	let sum = 0;
	for (let elem of arr) {
		if (elem >= 0) {
			sum += elem;
		}
	}
	return sum;
}


//----------------------------------------------------7
function findNeedle(haystack) {
	if (haystack.includes("needle")) {
		return "found the needle at position " + haystack.indexOf("needle")
	}
}


//----------------------------------------------------8
function getEvenNumbers(numbersArray) {
	return numbersArray.filter(x => x % 2 == 0)
}



//----------------------------------------------------9
function sumOfMinimums(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += Math.min(...arr[i])
	}
	return sum;
}


//----------------------------------------------------10
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
for (let elem of arr) {
	if (elem % 2 == 0) {
		sum += elem;
	}
}
console.log(sum);



//----------------------------------------------------11
function countDevelopers(list) {
	let count = 0;

	for (let elem of list) {
		if (elem.continent == 'Europe' && elem.language == 'JavaScript') {
			count += 1
		}
	}

	return count;
}



//----------------------------------------------------12
function sumEvenNumbers(input) {
	let sum = 0;
	for (let elem of input) {
		if (elem % 2 == 0) {
			sum += elem
		}
	}
	return sum
}



//----------------------------------------------------13
var greet_abe = function () {
	var name = 'Abe';
	return "Hello, " + name + '!';
};
var name = 'Ben';
var greet_ben = function () {
	return "Hello, " + name + '!';
};


//----------------------------------------------------14
function reverseWords(str) {
	return str.split(' ').reverse().join(' '); // reverse those words
}


//----------------------------------------------------15
function twoSort(s) {
	let result = s.sort()
	return result[0].split('').join('***')
}


//----------------------------------------------------16
function greet(name) {
	return `Hello, ${name} how are you doing today?`
}


//----------------------------------------------------17
function getMiddle(s) {
	let num = s.length / 2
	if (s.length % 2 == 1) {
		return s[Math.floor(num)]
	} else if (s.length % 2 == 0) {
		return s[num - 1] + s[num]
	}
}


//----------------------------------------------------18
function well(x) {
	let good = 0;
	for (let elem of x) {
		if (elem === 'good') {
			good += 1;
		}
	}

	if (good == 1 || good == 2) {
		return 'Publish!'
	} else if (good > 1) {
		return 'I smell a series!'
	} else if (good === 0) {
		return 'Fail!'
	}
}


//----------------------------------------------------19
function stringClean(s) {
	return s.split('').filter(x => !(x == 1 || x == 2 || x == 3 || x == 4 || x == 5 || x == 6 || x == 7 || x == 8 || x == 9 || x == '0')).join('')
}




//----------------------------------------------------20
function fixTheMeerkat(arr) {
	return arr.reverse()
}

//----------------------------------------------------21
function greet(name) {
	return `Hello, ${name} how are you doing today?`
}


//----------------------------------------------------22
function abbrevName(name) {
	return name.split(' ').map(x => x[0]).join('.').toUpperCase()
}


//----------------------------------------------------23
function removeChar(str) {
	return str.slice(1, -1)
};


//----------------------------------------------------24
function trouble(x, t) {
	for (let i = 0; i < x.length; i++) {
		if ((x[i] + x[i + 1]) == t) {
			x.splice(i + 1, 1)
			i--;
		}
	}
	return x
}


//----------------------------------------------------25
function countSheeps(arr) {
	let count = 0;
	for (let elem of arr) {
		if (elem === true) {
			count += 1;
		}
	}
	return count;
}

console.log('sefwef');


//----------------------------------------------------26
function areYouPlayingBanjo(name) {
	if (name[0] == 'r' || name[0] == 'R') {
		return name + " plays banjo"
	} else {
		return name + " does not play banjo"
	}
}



//----------------------------------------------------27
function orderFood(list) {
	let objCountMeal = {}
	for (let elem of list) {
		if (elem['meal'] == 'vegetarian') {
			('vegetarian' in objCountMeal) ? objCountMeal['vegetarian'] += 1 : objCountMeal['vegetarian'] = 1
		} else if (elem['meal'] == 'standard') {
			('standard' in objCountMeal) ? objCountMeal['standard'] += 1 : objCountMeal['standard'] = 1
		} else if (elem['meal'] == 'vegan') {
			('vegan' in objCountMeal) ? objCountMeal['vegan'] += 1 : objCountMeal['vegan'] = 1
		} else if (elem['meal'] == 'diabetic') {
			('diabetic' in objCountMeal) ? objCountMeal['diabetic'] += 1 : objCountMeal['diabetic'] = 1
		} else if (elem['meal'] == 'gluten-intolerant') {
			('gluten-intolerant' in objCountMeal) ? objCountMeal['gluten-intolerant'] += 1 : objCountMeal['gluten-intolerant'] = 1
		}
	}
	return objCountMeal;
}


//----------------------------------------------------28

function makeNegative(num) {
	if(num===0){
		return num
	}
	if(num<0){
		return num
	}
	return num=num*(-1)
}



//----------------------------------------------------29


//----------------------------------------------------30


//----------------------------------------------------31


//----------------------------------------------------32


//----------------------------------------------------33


//----------------------------------------------------34


//----------------------------------------------------35


//----------------------------------------------------36


//----------------------------------------------------37


//----------------------------------------------------38


//----------------------------------------------------39


//----------------------------------------------------40


//----------------------------------------------------41


//----------------------------------------------------


//----------------------------------------------------


//----------------------------------------------------


//----------------------------------------------------


//----------------------------------------------------


//----------------------------------------------------


//----------------------------------------------------


//----------------------------------------------------


//----------------------------------------------------


//----------------------------------------------------


//----------------------------------------------------


//----------------------------------------------------


//----------------------------------------------------


