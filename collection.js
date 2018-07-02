//JavaScript Template for "collection.js":

var CollectionFramework =function() {
	'use strict';

	var Collection={};

	// COLLECTIONS
	// ===========

	// In this programming assignment, you will be implementing functions that operate on collections
	// of values; in JavaScript, a 'collection' is something that can contain a
	// number of values -- either an array or an object. For example, the collection here could be:
	// - An array of values that looks like this - ['String1', 'String2', 100.21, 'String4', ...]
	// - An object that looks like this - { key1: 'String1', key2: 'String2', key3: 'String4', ...]
	// Unless specified that the collection is an array, assume that it could be an array or object
	// 
	// Calls the method named by functionOrKey on each value in the list.
	Collection.invoke = function(collection, functionOrKey, args) {

	 	var outputArr=[];
	 	collection.forEach(function(curEle) {
		    var method;
		    method = functionOrKey;
	      	outputArr.push(method.call(curEle, args));
	    });
	 	return outputArr;

	};


	// Sort the object's values by a criterion produced by an iterator.
	// If iterator is a string, sort objects by that property with the name
	// of that string. For example, Collection.sortBy(people, 'name') should sort
	// an array of people by their name.
	Collection.sortBy = function(collection, iterator) {

		// assuming collection as Array, iterator will be either 'desc' or 'asc'

		if(checkValidity(collection)) {
			collection.sort(); 
			if (iterator === 'asc') {
		      return collection;
		    } else if (iterator === 'desc'){
		      return collection.reverse();
		    } else {
		      return 'Please provide valid sorting order (asc  or desc)';
		    }
		} else {
		    return 'Please provide valid input';
		}

	};


	// Zip together two or more arrays with elements of the same index
	// going together.
	//
	// Example:
	// Collection.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
	Collection.zip = function() {

		var argumentsArray = Array.prototype.slice.call(arguments);

		//find the size of the longest array
		function getLongestArraySize(argumentsArray){
			var longestArrSize=0;
			for(var i = 0; i<argumentsArray.length;i++){
				if(argumentsArray[i].length > longestArrSize){
					longestArrSize = argumentsArray[i].length
				}
			}
			return longestArrSize;
		}
		
		var longestArrSize = getLongestArraySize(argumentsArray);
		var finalZippedArr = [];
		var singleZippedEle =[];

		//access the elements at the specific index of each sub array and zip to form a finalZippedArr
		for (var i=0; i<longestArrSize; i++){
		  singleZippedEle = [];
		  for (var j=0; j<argumentsArray.length; j++){
		   	singleZippedEle.push(argumentsArray[j][i]);
		  }
		  finalZippedArr.push(singleZippedEle);
		}
		return finalZippedArr;
	};



	// Takes a multidimensional array and converts it to a one-dimensional array.
	// The new array should contain all elements of the multidimensional array.
	//
	// Hint: Use Array.isArray to check if something is an array
	Collection.flatten = function(nestedArray, result) {

		var singleDimArry = [];  

		//function to recursively flatten the subarrays
	    var convertToSingleDim = function(nestedArray) {
		    nestedArray.forEach(function(arrayEle) {
		        if (!Array.isArray(arrayEle)) {
		          singleDimArry.push(arrayEle);
		        } else {
		            convertToSingleDim(arrayEle);
		        }
		    });
	    };
	    convertToSingleDim(nestedArray);
	    return singleDimArry;
	};


	// Takes an arbitrary number of arrays and produces an array that contains
	// every item shared between all the passed-in arrays.
	Collection.intersection = function() {

		var argumentsArr = Array.prototype.slice.call(arguments);
	    var intersectedEleArr = [];

	    if(argumentsArr.length>1) {
	    	// iterating through the first array and checking for the elements in all other arrays
		 	for(var firstArrItr=0;firstArrItr<argumentsArr[0].length;firstArrItr++)  {
		 		var isCommon = false;
		 		for(var i=1;i<argumentsArr.length;i++){
		 			if(checkValidity(argumentsArr[i])) {
			 			if(argumentsArr[i].indexOf(argumentsArr[0][firstArrItr]) > -1){
			 				isCommon = true;
			 			}else{
			 				isCommon = false;
			 				break;
			 			}
			 		} else {
					    return 'Please provide valid input';
					}
		 		}
		 		if(isCommon){
		 			intersectedEleArr.push(argumentsArr[0][firstArrItr]);
		 		}
			}
			return intersectedEleArr;
		}
		else if (argumentsArr.length==1)
			return argumentsArr[0];
		else
			return 'Please provide valid array.';


		
	};

	// Take the difference between one array and a number of other arrays.
	// Only the elements present in just the first array will remain.
	Collection.difference = function(array) {

		var argumentsArr = Array.prototype.slice.call(arguments);
	    var uniqueEleArr = [];

	    if(argumentsArr.length>1) {
	    	// iterating through the first array and checking for the elements in all other array
		 	for(var firstArrItr=0;firstArrItr<argumentsArr[0].length;firstArrItr++) {
		 		var isUnique = true;
		 		for(var i=1;i<argumentsArr.length;i++){
		 			if(Array.isArray(argumentsArr[i])) {
			 			if(argumentsArr[i].indexOf(argumentsArr[0][firstArrItr]) > -1){
			 				isUnique = false;
			 				break;
			 			}
			 		} else {
					    return 'Please provide valid input';
					}
		 		}
		 		if(isUnique){
		 			uniqueEleArr.push(argumentsArr[0][firstArrItr]);
		 		}
			}

			return uniqueEleArr;
		}
		else if (argumentsArr.length==1)
			return argumentsArr[0];
		else
			return 'Please provide valid array.';

	};

	function checkValidity(collection) {
		if(Array.isArray(collection))
			return true;
		else
			return false;

	}
	return Collection;
};

module.exports=CollectionFramework();
