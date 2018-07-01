var CollectionFramework = require('./collection.js');

function compare(actualArr,expectedArr) {

	if(actualArr.length != expectedArr.length) {
	 	return 'fail';
	}
	for(var i in actualArr) {
		  
		if(actualArr[i] instanceof Array && expectedArr[i] instanceof Array) {
			if(!compare(actualArr[i], expectedArr[i])) {
			    return 'fail';
			}
		} else if(actualArr[i] != expectedArr[i]) {
			return 'fail';
		}
	}
	return 'pass';
}

//Test Cases for functions

//Testing invoke method
console.log();
console.log('Test cases for invoke');
var addValue= function(extraVal){
	return parseInt(this.valueOf())+extraVal;
}

var actualResult = CollectionFramework.invoke([5,4,2,-3,1,6,0], addValue, 100);
var expectedResult = [ 105, 104, 102, 97, 101, 106, 100 ];
var testResult = compare(actualResult, expectedResult);
console.log('Testcase 1 ', testResult);

var appendString= function(extraVal){
	return this.valueOf()+extraVal;
}

var actualResult = CollectionFramework.invoke([5,4,'xyz',3,1,6,0], appendString, 'abc');
var expectedResult = [ '5abc', '4abc', 'xyzabc', '3abc', '1abc', '6abc', '0abc' ];
var testResult = compare(actualResult, expectedResult);
console.log('Testcase 2 ', testResult);





//Testing sortBy method
console.log();
console.log('Test cases for sortBy');

// Test case for alphabets ordering
var actualResult = CollectionFramework.sortBy(['a', 'b', 'c', 'd'], 'desc');
var expectedResult = ['d', 'c', 'b', 'a'];
var testResult = compare(actualResult, expectedResult);

console.log('Testcase 1 ', testResult);

// Test case for empty array
var actualResult = CollectionFramework.sortBy([], 'desc');
var expectedResult = [];
var testResult = compare(actualResult, expectedResult);

console.log('Testcase 2 ', testResult);

// Test case for combination of all characters
var actualResult = CollectionFramework.sortBy(['e', '5', 'aa', 9, '#'], 'asc');
var expectedResult = ['#', '5', 9, 'aa', 'e'];
var testResult = compare(actualResult, expectedResult);

console.log('Testcase 3 ', testResult);

// Test case for array of words
var actualResult = CollectionFramework.sortBy(['TypeScript', 'JavaScript', 'Python'], 'asc');
var expectedResult = ['JavaScript', 'Python', 'TypeScript'];
var testResult = compare(actualResult, expectedResult);

console.log('Testcase 4 ', testResult);

// Test case for combination of all characters including null
var actualResult = CollectionFramework.sortBy(['a', null, '%'], 'desc');
var expectedResult = [null, 'a', '%'];
var testResult = compare(actualResult, expectedResult);

console.log('Testcase 5 ', testResult);

// Test case with no input for parameter iterator
var actualResult = CollectionFramework.sortBy([1,5,10,4], '');
var expectedResult = 'Please provide valid sorting order (asc  or desc)';
var testResult = compare(actualResult, expectedResult);

console.log('Testcase 6 ', testResult);

// Test case with no input array
var actualResult = CollectionFramework.sortBy('', 'asc');
var expectedResult = 'Please provide valid input';
var testResult = compare(actualResult, expectedResult);
console.log('Testcase 7 ', testResult);





//Testing zip method
console.log();
console.log('Test cases for zip');

// Test case with no input array of different sizes
var actualResult = CollectionFramework.zip(['a', 'b', 'c', 'd'], [1, 2, 3]);
var expectedResult = [['a', 1], ['b', 2], ['c', 3], ['d', undefined]];
var testResult = compare(actualResult, expectedResult);

console.log('Testcase 1 ', testResult);

// Test case with no input array of same sizes
var actualResult = CollectionFramework.zip(['R', 'h', 'l'], ['o', 'i', 'a']);
var expectedResult = [['R', 'o'], ['h', 'i'], ['l', 'a']];
var testResult = compare(actualResult, expectedResult);

console.log('Testcase 2 ', testResult);

// Test case with no input array of different sizes
var actualResult = CollectionFramework.zip(['Ro', 'la'], ['hi']);
var expectedResult = [['Ro', 'hi'], ['la', undefined]];
var testResult = compare(actualResult, expectedResult);

console.log('Testcase 3 ', testResult);





//Testing flatten method
console.log();
console.log('Test cases for flatten');

// Test case with combination of numbers, strings and chars
var actualResult = CollectionFramework.flatten(['a', ['AA', '&&'], 'c', 'd', [1, 2, 3], ['@', '#']])
var expectedResult = ['a', 'AA', '&&', 'c', 'd', 1, 2, 3, '@', '#'];
var testResult = compare(actualResult, expectedResult);

console.log('Testcase 1 ', testResult);

// Test case with combination of nulls and empty array
var actualResult = CollectionFramework.flatten(['a', [], 'c', 'd', [], null])
var expectedResult = ['a', 'c', 'd', null];
var testResult = compare(actualResult, expectedResult);

console.log('Testcase 2 ', testResult);

// Test case with combination of undefined, nulls and empty array
var actualResult = CollectionFramework.flatten(['a', ['AA', null, undefined, ''], 'c'])
var expectedResult = ['a', 'AA', null, undefined, '', 'c'];
var testResult = compare(actualResult, expectedResult);

console.log('Testcase 3 ', testResult);

// Test case with combination of empty string and null
var actualResult = CollectionFramework.flatten(['a', ['AA', null, ']', ''], 'c'])
var expectedResult = ['a', 'AA', null, ']', '', 'c'];
var testResult = compare(actualResult, expectedResult);

console.log('Testcase 4 ', testResult);

// Test case with combination of empty array
var actualResult = CollectionFramework.flatten([])
var expectedResult = [];
var testResult = compare(actualResult, expectedResult);

console.log('Testcase 5 ', testResult);





//Testing intersection method
console.log();
console.log('Test cases for intersection method');

// Test case with normal arrays of different sizes
var actualResult = CollectionFramework.intersection([1, 3, 5], [3, 4]);
var expectedResult = [3];
var testResult = compare(actualResult, expectedResult);

console.log('Testcase 1 ', testResult);

// Test case with normal arrays of same sizes
var actualResult = CollectionFramework.intersection([ 3, 5], [3, 4], [5, 4]);
var expectedResult = [];
var testResult = compare(actualResult, expectedResult);

console.log('Testcase 2 ', testResult);

// Test case with arrays including chars and integers of different sizes
var actualResult = CollectionFramework.intersection([1, 3, 5, 'a', 'b'], [3, 4, 'a'], [5, 3, 4, 'a', 'v']);
var expectedResult = [3, 'a'];
var testResult = compare(actualResult, expectedResult);
console.log('Testcase 3 ', testResult);

// Test case with arrays including chars and integers of different sizes and also empty arrays
var actualResult = CollectionFramework.intersection([1, 3, 5, 'a', 'b'], [], [5, 3, 4, 'a', 'v']);
var expectedResult = [];
var testResult = compare(actualResult, expectedResult);
console.log('Testcase 4 ', testResult);

// Test case with empty array
var actualResult = CollectionFramework.intersection([]);
var expectedResult = [];
var testResult = compare(actualResult, expectedResult);
console.log('Testcase 5 ', testResult);

// Test case with no input
var actualResult = CollectionFramework.intersection();
var expectedResult = 'Please provide valid array.';
var testResult = compare(actualResult, expectedResult);
console.log('Testcase 6 ', testResult);






//Testing difference method
console.log();
console.log('Test cases for difference method');

// Test case with input array of numbers
var actualResult = CollectionFramework.difference([1, 2, 5], [2], [1], [1, 4]);
var expectedResult = [5];
var testResult = compare(actualResult, expectedResult);
console.log('Testcase 1 ', testResult);

// Test case with input array of numbers
var actualResult = CollectionFramework.difference([1, 2, 5], [2], [1], [1, 4], [5]);
var expectedResult = [];
var testResult = compare(actualResult, expectedResult);
console.log('Testcase 2 ', testResult);

// Test case with input array of chars and numbers
var actualResult = CollectionFramework.difference([1, 2, 5, '%', '^'], [2], [1, '^'], [1, 4, '&'], [5]);
var expectedResult = ['%'];
var testResult = compare(actualResult, expectedResult);
console.log('Testcase 3 ', testResult);

// Test case with input array of chars and numbers
var actualResult = CollectionFramework.difference([1, -2, 5, '%', '^', 'Ab'], [-2, 'AA'], [1, '^'], [1, 4, '&'], [5]);
var expectedResult = ['%', 'Ab'];
var testResult = compare(actualResult, expectedResult);
console.log('Testcase 4 ', testResult);

// Test case with input arrays and not arrays
var actualResult = CollectionFramework.difference([1, 2, 5, '2', '3', '%', '^', 'Ab'], '2', 5, [2, 'AA'], [1, '^'], [1, 4, '&'], [5]);
var expectedResult = 'Please provide valid input';
var testResult = compare(actualResult, expectedResult);
console.log('Testcase 5 ', testResult);
