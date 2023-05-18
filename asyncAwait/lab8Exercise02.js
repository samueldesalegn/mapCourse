Array.prototype.removeDuplicatesAsync = async function () {
	let arr = this;
	
		// console.log([...new Set(arr)]); 
		console.log(arr.filter((v, i) => arr.indexOf(v) == i));

	
};


console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
console.log(`end`);



