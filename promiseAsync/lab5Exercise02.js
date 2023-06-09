// Exercise 02
// Create a method named removeDuplicatesAsync which works only for Array types and removes all duplicates for any array asynchornously.
//  When you finish, test using the code below:

// NOTE: If you use Promise, the promise is already resolved inside the method which is different from previous exercise

// Optional: You can try to implement use async&await

Array.prototype.removeDuplicatesAsync = function () {
	let arr = this;
	new Promise((resolve, reject) => {
		// resolve([...new Set(arr)]); 
		resolve(arr.filter((v, i) => arr.indexOf(v) == i));

	}).then(console.log);
};


console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
console.log(`end`);



