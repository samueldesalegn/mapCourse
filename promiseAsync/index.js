// let f = new Promise((resolve, reject) =>{
// 	setTimeout(() => {
// 		// resolve("Done!");
// 		reject("Done!");
// 	}, 2000);
// });

// f.then(val =>console.log("resolved: ", val), val =>console.log("rejected: ", val));
// f.catch(err => console.log("rejected: ", err));

// let promise = new Promise((resolve, reject) =>{
// 	// setTimeout(resolve("done"), 1000);
// 	setTimeout(reject(new Error("Whoops")), 1000);
// 	// resolve("done");
// });

// console.log(promise);


// let promise = new Promise((resolve, reject) => {
// 	let rand = Math.random();
// 	console.log("random: ", rand);
// 	if (rand >= 0.5) {
// 		// setTimeout(resolve("done"), 1000);
// 		resolve("done")
// 	}else {
// 		// setTimeout(reject(new Error("Whoops")), 1000);
// 		reject(new Error("Whoops"));
// 	}
// });

// promise
// .then(res => console.log(res))
// .catch(err =>console.log(err.message))
// .finally(()=>console.log("Promise is ready"));


setTimeout(() => console.log("SetTimeout Results"), 0);
let promise = new Promise((resolve) => resolve("Promise Results"));

console.log("Code starts");
promise.then(console.log);
console.log("Love JS");