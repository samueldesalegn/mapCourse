

// // let btn = document.getElementById("btn");

// // const { resolve } = require("path");

// // btn.addEventListener("click", () => {
// // 	console.log("The button was clicked!");
// // });



// let students = [
// 	{name: "Mary", score: 90, school: "East"},
// 	{name: "James", score: 100, school: "East"},
// 	{name: "Steve", score: 40, school: "East"},
// 	{name: "Gabe", score: 90, school: "West"},
// 	{name: "Hani", score: 85, school: "East"},
// 	{name: "Wini", score: 95, school: "West"},
// 	{name: "John", score: 75, school: "East"},
// ];


// let processStudents = function(data, cb) {
// 	for (let i = 0; i < data.length; i++) {
// 		if (data[i].school.toLowerCase() === "east") {
// 			if (typeof cb === "function") {
// 				cb(data[i]);
// 			}
// 		}	
// 	}
// };


// processStudents(students, function(ob) {
// 	if (ob.score > 60) {
// 		console.log(ob.name + " has passing score!");
// 	}
// });

//  let asyncFunction = () => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve("AsyncFunction has resolved!")
// 		}, 2000);
// 	});
// };

// let asyncFunction2 = () => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve("AsyncFunction2 has resolved!")
// 		}, 2000);
// 	});
// };

// let promise = asyncFunction();
// promise.then(val => {
// 	console.log(val);
// 	return asyncFunction2();
// }).then(val =>{
// 	console.log(val);
// });



console.log('start');

async function foo() {

    return 'done!';

}

 

// async function bar() {

//     console.log('inside bar - start');

//     console.log(await foo()); 

//     console.log('inside bar - end');

// }

// bar();

// console.log('end');


function f(a, b) {
    a(b.length);
}

f(data => console.log(`First: ${data}`), "Hello");
f(abc => console.log(`Second: ${abc}`), "Hi");

