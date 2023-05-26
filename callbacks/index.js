/* eslint-disable require-jsdoc */


// // let btn = document.getElementById("btn");

// import { clearInterval, clearTimeout } from "timers";
// import { setInterval } from "timers/promises";

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



// console.log('start');
// async function foo() {
//     return 'done!';
// }

// async function bar() {
//     console.log('inside bar - start');
//     console.log(await foo()); 
//     console.log('inside bar - end');
// }

// bar();
// console.log('end');


// function f(a, b) {
//     a(b.length);
// }

// f(data => console.log(`First: ${data}`), "Hello");
// f(abc => console.log(`Second: ${abc}`), "Hi");

// function f(a, b) {
//     return a(b.length);
// }

// console.log(f(data =>data, "Hello"));
// console.log(f(abc => abc, "Hi"));

// console.log(0);
// setTimeout(() => console.log(1), 2000);
// setTimeout(() => console.log(2), 0);
// setTimeout(() => console.log(3));
// console.log(4);

// let timerId = setTimeout(() => {
//     console.log(6);

// }, 2000);

// clearTimeout(timerId);
// console.log(timerId);


// let timerId = setInterval(() => {
//     console.log("tick");
// }, 1000);

// setTimeout(() => {
//    clearInterval(timerId);
//    console.log("stopped!");
// }, 4000);


// let timerId = setTimeout(function tick() {
//     console.log("tick");
//     timerId = setTimeout(tick, 2000); // (*)
// }, 0);

// setTimeout(() => {
//        clearInterval(timerId);
//        console.log("stopped!");
// }, 2000);


// // Using setInterval

// function printNumbers(n, m) {
//     let i = n;
//     let timerId = setInterval(() => {
//             if (i <= m) {
//                 console.log(i);
//                 i++;
//             } else {
//                 clearInterval(timerId);
//             }
            
//     }, 1000);
// }

// printNumbers(2, 8);


// Using setTimeout

function printNums(n, m) {
    let i = n;
   
    setTimeout(function f() { 
        console.log(i);
        i++;
            if (i <= m) {
               setTimeout(f, 1000); 
            }
        }, 2000);

        
    
}

printNums(2, 8);


// function printNum(n, m) {
//     let i = n;
//     setTimeout(function f() {
//       console.log(i);
//       i++;
      
//       if (i <= m) {
//         setTimeout(f, 1000);
//       }
//     }, 0);

// }

// let i = 0;

// setTimeout(() => console.log(i), 0); // ?

// // assume that the time to execute this function is >100ms
// for(let j = 0; j < 100000000; j++) {
//   i++;
// }


function f(){
	console.log("start");
	let str = "done";
		setInterval(() => {
			console.log(str);
			
		}, 1000);
		
}



//start
// Promise {'done'}

// let str = "done";
// 		let timerId = setInterval(() => {
// 			console.log(str);
			
// 		}, 1000);

// const asyncFunc = async function() {
// 	let p1 = await asyncFunc();
// 	console.log(p1);
// 	console.log(`${p1} - more info`)
// }
// asyncFunc();