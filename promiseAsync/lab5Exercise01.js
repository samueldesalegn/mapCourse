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

console.log("start");
isPrime(7)
    .then(res => console.log(res))
    .catch(err => console.error(err));
console.log("end");





	