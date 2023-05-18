/* eslint-disable require-jsdoc */
const isPrime = num => {
	let bool = false;
	for (let i = 0, s = Math.sqrt(num); i <= s; i++) {
		bool =(num%i !==0);
	}
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`{ prime: ${bool} }`); 
			reject(`{ prime: ${bool} }`);
			
		}, 500);
	});	
	};
async function isPrimeAsync(num){
		try {
			let res = await isPrime(num);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	}	

console.log("start");
isPrimeAsync(7);
console.log("end");