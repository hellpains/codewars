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
    }
    ;
    for (let elem of arr2) {
        sum2 += elem
    }
    ;
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

function removeSmallest(numbers) {
    let minNum = numbers[0]
    let newArr123 = []
    for (let i = 1; i < numbers.length; i++) {
        if (minNum > numbers[i]) {
            minNum = numbers[i]

        }
    }
    let str = numbers.length - newArr123.length
    let newArr123123 = []
    for (let i = 0; i < str - 1; i++) {
        if (str > 1) {
            newArr123123.push(minNum)
        }
    }
    for (let j = 0; j < numbers.length; j++) {
        if (numbers[j] !== minNum) {
            newArr123 = numbers[j]
        }
    }
    return newArr123
}

//----------------------------------------------------29

function fakeBin(x) {
    let arr = x.split('')
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) < 5) {
            arr[i] = '0'
        }
    }
    for (let i = 0; i < x.length; i++) {
        if (Number(arr[i] > 5 || arr[i] == 5)) {
            arr[i] = '1'
        }
    }
    return arr.join('')
}


//----------------------------------------------------30

function testEven(n) {
    if (n % 2 == 0 || n === 0) {
        return true
    } else {
        return false
    }

}

//----------------------------------------------------31

function smash(words) {
    return words.join(' ')
}

//----------------------------------------------------32

function getAverage(marks) {
    let num = 0;
    for (let elem of marks) {
        num += elem
    }
    let result = num / marks.length
    return Math.floor(result)
}


//----------------------------------------------------33

function gimme(triplet) {
    let a = triplet[0]
    let b = triplet[1]
    let c = triplet[2]

    if (a > b && a < c || a < b && a > c) {
        return 0
    }
    if (b > a && b < c || b < a && b > c) {
        return 1
    }
    if (c > a && c < b || c < a && c > b) {
        return 2
    }
}

//----------------------------------------------------34


function solution(nums) {
    if (nums == undefined) {
        return []
    } else {
        return nums.sort((a, b) => a - b)
    }
}


//----------------------------------------------------35

let capitals = function (word) {
    let arr = word.split('')
    let sumArr = []
    for (let elem of arr) {
        let isUpperCase = elem.toUpperCase() == elem;
        if (isUpperCase === true) {
            let i = arr.indexOf(elem)
            sumArr.push(i)
        }
    }
    return sumArr
};


//----------------------------------------------------36

function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                if (j === 0) {
                    return [i, j + 1]
                } else {
                    return [i, j]
                }
            }
        }
    }
}


//----------------------------------------------------37


class Person {
    constructor(myName) {
        this.name = myName
    }

    greet(yourName) {
        return "Hello " + yourName + ", my name is " + this.name;
    }

}


//----------------------------------------------------38

class Animal {
    constructor(name, age, legs, species, status) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
    }

    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, status);
        this.legs = 0
        this.species = "shark"
        this.status = status
    }
}

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, status);
        this.legs = 4
        this.species = "cat"
        this.status = status
    }

    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
    }
}


class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, status);
        this.master = master
        this.legs = 4
        this.species = "dog"
        this.status = status
    }

    greetMaster() {
        return `Hello ${this.master}`;
    }
}


//----------------------------------------------------39
var list1 = [
    {firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C'},
    {firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript'},
    {firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby'},
    {firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C'},
];

function countLanguages(list) {
    let C = 0
    let JavaScript = 0
    let Python = 0
    let Ruby = 0
    let Clojure = 0
    let Java = 0
    let PHP = 0

    let obj = {}
    list.map(el => el.language === 'JavaScript' ? JavaScript++ : '')
    list.map(el => el.language === 'Python' ? Python++ : '')
    list.map(el => el.language === 'C' ? C++  : '')
    list.map(el => el.language === 'Clojure' ? Clojure++ : '')
    list.map(el => el.language === 'Ruby' ? Ruby++ : '')
    list.map(el => el.language === 'Java' ? Java++ : '')
    list.map(el => el.language === 'PHP' ? PHP++ : '')
    if (C !== 0) {
        obj.C = C
    }
    if (JavaScript !== 0) {
        obj.JavaScript = JavaScript
    }
    if (Python !== 0) {
        obj.Python = Python
    }
    if (Ruby !== 0) {
        obj.Ruby = Ruby
    }
    if (Clojure !== 0) {
        obj.Clojure = Clojure
    }
    if (Java !== 0) {
        obj.Java = Java
    }
    if (PHP !== 0) {
        obj.PHP = PHP
    }


    return obj
}



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


