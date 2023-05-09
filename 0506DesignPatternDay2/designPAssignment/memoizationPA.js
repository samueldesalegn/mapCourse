/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
// Exercise 04
// Create a memoized version of the following fibonacci() recursive method to improve its performance.
//  Additional Requirements: 
// No variables leaking to global scope and use Object instead Map as cache data structure

const fibonacci = (function() {
	const memo = {};

	function f(n) {
			let value;
			if (n in memo) {
					value = memo[n];
			} else {
					if (n <= 1) {
							value = n;
					} else {
							value = f(n - 1) + f(n - 2);
					}
					memo[n] = value;
			}
			return value;
	}
	return f;
})();



