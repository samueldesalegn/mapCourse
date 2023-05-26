/* eslint-disable require-jsdoc */
// console.log(' start');
// async function f() {
// return 1;
// }
// f().then(console.log);
// console.log(' end');



// console .log("start") ;
// async function foo( ) {
// return "done!";
// }
// async function bar() {
// console.log(" i n s i d e b a r - s t a r t ") ;
// let result = await foo();
// console.log(result) ; // " d o n e ! "
// console.log(" i n s i d e b a r - end") ;
// }
// bar() ;
// console.log("end") ;

async function thisThrows() {
	throw new Error("Thrown from thisThrows()");
	
}
// try {
// thisThrows();
// } catch (e) {
// console.error(e.message);
// } finally {
// console.log("We do cleanup here");
// }

async function run() {
	try {
	await thisThrows();
	} catch (e) {
	console.log('Caught the error....');
	console.error(e.message);
	} finally {
	console.log('We do cleanup here');
	}
	}
	run();

// 	thisThrows()
// .catch (e => console.error(e.message))
// .finally(() => console.log('We do cleanup here'));
// console.log("start");
// async function f() {
// 	console.log("inside f1");
// 	return "Hello";
// }
// const res = f();
// console.log(res);
// res.then(console.log);

// console.log("end");


// class Thenable {
//   constructor(num) {
//     this.num = num;
//   }
//   then(resolve, reject) {
//     console.log(resolve);
//     // resolve with this.num*2 after 1000ms
//     setTimeout(() => resolve(this.num * 2), 1000); // (*)
//   }
// }

// async function f() {
//   // waits for 1 second, then result becomes 2
//   let result = await new Thenable(1);
//   console.log(result);
// }

// f();


// console.log("start");
// async function f() {
// 	return 1;
// }
// f().then(console.log);
// console.log("end");



// console.log("start");
// async function foo() {return "done"}
// async function bar() {
// 	console.log("Inside bar -  start");
// 	let res = await foo();
// 	console.log(res);
// 	console.log("Inside bar -  end");
	
// }

// bar();
// console.log("end");


// async function throwThis(){
// 	throw new Error("Thrown from throwThis()");
// }

// async function run() {
// 	try {
// 		await throwThis();
// 	} catch (e) {
// 		console.log("Caught error here ....");
// 		console.error(e.message);
// 	}finally {
// 		console.log("You can do some cleanups here ...")
// 	}
// }

// run();

// console.log("start")
// async function foo(){
// 	console.log("Inside foo!")
// 	return "Hello";
// }

// async function f() {
	
// 	let res = await foo();
// 	console.log(res);
// }
// f();
// // res.then(console.log);
// console.log('end');
	