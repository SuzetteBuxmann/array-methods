/*****************************************/

//array filter - takes another function as an arg
var arr = [2, 3, 4, 5, 6, 7, 12, 15];
function isEven(el) {
	return el%2 == 0; 
}
arr.filter(isEven);
/*
//output
arr.filter(isEven);
(4) [2, 4, 6, 12]
*/

//call back function takes three args: element, index and array - the first one was used above and the others would have been dismissed by javascript.  
function isOdd(current, index, array) {
	console.log(current + " ... " + index + " ... " + array);
	return current%2 != 0;
}
arr.filter(isOdd);
/*
//output
2 ... 0 ... 2,3,4,5,6,7,12,15
VM275:2 3 ... 1 ... 2,3,4,5,6,7,12,15 //1 = value (element)
VM275:2 4 ... 2 ... 2,3,4,5,6,7,12,15 //2 = index no.
VM275:2 5 ... 3 ... 2,3,4,5,6,7,12,15 //3 = full array
VM275:2 6 ... 4 ... 2,3,4,5,6,7,12,15
VM275:2 7 ... 5 ... 2,3,4,5,6,7,12,15
VM275:2 12 ... 6 ... 2,3,4,5,6,7,12,15
VM275:2 15 ... 7 ... 2,3,4,5,6,7,12,15
(4) [3, 5, 7, 15]
*/

// Function that takes an array and a criteria function (for filtering) and returns the array of those elements which do not fulfill the criteria. The criteria function should take any element as argument and return a boolean value.
//filter out items that are not odd
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function oddArray (arr,checkO) {
	return arr.filter(function(i) {
		return !checkO(i);
	});
}
function checkO(element) {
	return element%2!=0;
}

oddArray(nums, checkO);
//result: (5) [2, 4, 6, 8, 10]

/*****************************************/

//array map
var returnSquare = [3, 4, 6, 7, 9];
returnSquare.map(function(elem) {
	return elem*elem;
});
//output: (5) [9, 16, 36, 49, 81]

//Function that takes an array of numbers and returns the sum of squares of those numbers. 

var numArr = [1, 2, 3];
function sum_of_squares(arr) {
  return arr.map(function(elem) {return elem * elem}).reduce(function(prev, curr) {return prev + curr}, 0);
}
sum_of_squares(numArr);
// output: 14

/*****************************************/

//array reduce
//callback function of reduce takes 4 args: prev, curr, index, array
//prev: value previously return in the last invocation of the callback, or the initial value, if supplied
//curr: current element being processed in the array
var sumOfNumbers = [3, 4, 6, 7, 9];
sumOfNumbers.reduce(function(prev, curr, ind, arr) {
	console.log(prev + " ... " + curr + " ... " + ind + " ... " + arr);
	return prev + curr; 
}, 0);// passing the initial value!!!
//if you don't pass the initial value it will use the first element in the array
/*
//output
0 ... 3 ... 0 ... 3,4,6,7,9
3 ... 4 ... 1 ... 3,4,6,7,9
7 ... 6 ... 2 ... 3,4,6,7,9
13 ... 7 ... 3 ... 3,4,6,7,9
20 ... 9 ... 4 ... 3,4,6,7,9
29
*/
//another reduce eg
function range(start, end, step) {
	var res = [];
	var item = start;
	while(item <= end) {
		res.push(item);
		item += step;
	}
	return res;
}
function sumOfNaturalNumbers(n) {
	return range(1, n, 1).reduce(function(prev, curr) {
		console.log("prev: " +prev + " ... curr: " + curr);
		return prev+curr;
	});	
}
sumOfNaturalNumbers(10);
//output:
/*
prev: 1 ... curr: 2
prev: 3 ... curr: 3
prev: 6 ... curr: 4
prev: 10 ... curr: 5
prev: 15 ... curr: 6
prev: 21 ... curr: 7
prev: 28 ... curr: 8
prev: 36 ... curr: 9
prev: 45 ... curr: 10
55
*/

// Function to find the largest string in an array of strings making use of the reduce function. 
var stringArr = ['Functional programming can prove to be very crisp and precise, you just have to be patient to get there.', 'Dicta impedit veritatis harum soluta perspiciatis, rem cum a facere minima dolorem odio in tenetur adipisci, quibusdam accusamus nisi aut sequi non.', 'If your program is having a loop construct, think if you can replace it using a list comprehension function(filter, map, reduce).', 'Try these exercises.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'];

var longestString = '';
stringArr.reduce(function(prev, curr) {
	if(curr.length > prev.length) {
		longestString = curr;
	}
	return longestString;
});

/*****************************************/
//arguments
function sum1() {
	console.log(arguments);
}
sum1(1, 2, 3);
//output: Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]

function sum2() {
	for(var i = 0; i<arguments.length; i++) {
		console.log(arguments[i]);
	}
}
sum2(3, 6, 9);
//output:
/*
3
6
9
*/
function sum3() {
	return arguments.reduce(function(prev, curr) {
		return prev + curr;
	});
}
sum3(2, 4, 6);
//output: 
/*
Uncaught TypeError: arguments.reduce is not a function
    at sum3 (<anonymous>:2:19)
    at <anonymous>:6:1
*/
function sum4() {
	var args = Array.prototype.slice.call(arguments);
	return args.reduce(function(prev, curr) {
		console.log("prev: " +prev + " ... curr: " + curr);
		return prev + curr;
	});
}
sum4(3, 5, 6);
//output
/*
prev: 3 ... curr: 5
prev: 8 ... curr: 6
14
*/