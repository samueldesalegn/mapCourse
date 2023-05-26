/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable require-jsdoc */


// function getLengthAfter(str, num){
//   return new Promise((resolve, reject) => {
// 		setTimeout(function() {
// 			resolve(str.length);
// 	  }, num);
// 	});
// }

// getLengthAfter("Hello", 3000).then(console.log);

// console.log("start");
// const result = new Promise((reject, resolve) => {
// 	console.log(1);
// 	setTimeout(() => reject("Whoops"), 1000);
// 	console.log(2);

// })
// .then(res => console.log(res))
// .catch(err => "Error Happens");

// console.log(result);
// console.log("end");


// console.log("start");

// function f() {
// 	return  new Promise((resolve, reject) => {
// 		setTimeout(() => resolve("Done"), 1000);
	
// 	});
// }

// async function bar(){
// 	console.log(await f());
// }
// // bar();
// f();
// console.log("end");


// console.log("start");
// const promise = new Promise((resolve, reject) => resolve("done"));


// function firstFun() {
// 	promise.then(res => console.log(res));
// 	console.log("first");
// }

// async function secondFun() {
// console.log("second: ", await promise);
// console.log("second");
// console.log("third");
// }
// firstFun();
// secondFun();
// console.log("end");

/**
 * start
 * first
 * end
 * done
 * second: done 
 * second
 * third
 */


// console.log("start");
// const promise = new Promise((resolve, reject) => {
// 	console.log(1);
// 	setTimeout(() => {
// 		console.log("timerStart");
// 		resolve("Success");
// 		console.log("timerEnd");
// 	}, 2000);

// 	console.log(2);
// });

// promise.then(res =>console.log(res));
// console.log("end");
/**
 * start
 * 1
 * 2
 * end
 * timerStart
 * timerEnd
 * Success
 */


// function getLengthAfter(str, num){
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve(str.length);
// 		}, num);
// 	});
// }

// getLengthAfter("hello", 1000)
// .then(console.log);

// console.log('start');
// let result = new Promise((resolve, reject) => {
// 	console.log(1);
// 	setTimeout(() => resolve("Whoops"), 1000);
// 	console.log(2);

// })
// .then(res => console.log(res))
// .catch(err => "Error Happens");

// // console.log(result);


// console.log("end");

// /**
//  * start
//  * 1
//  * 2
//  * Promise { <pending> }
//  * end
//  */


async function displayStudents() {

	    try {
	      const studentsResponse = await fetch('http://www.example.com/students');
	      const studentsData = await studentsResponse.json();
	
	      for (const student of studentsData) {
	        let totalGrade = 0;
	        let courseCount = 0;
	
	        for (const courseId of student.courses) {
	          const gradeResponse = await fetch(`http://www.example.com/grade?studentId=${student.id}&courseId=${courseId}`);
	          const gradeData = await gradeResponse.json();
	          const grade = gradeData.grade;
	
	          totalGrade += grade;
	
	          courseCount++;
	
	        }
	        const gradeAverage = totalGrade / courseCount;	
	        console.log(`{Student Name: ${student.name} Grade Average: ${gradeAverage}}`);
	      }
	
	    } catch (error) {
	
	      console.log(error);
	
	    }
	
	  }