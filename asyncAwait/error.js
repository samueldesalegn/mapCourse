/* eslint-disable require-jsdoc */
// async function f() {

//   try {
//     let response = await fetch('http://no-such-url');
//   } catch(err) {
//     console.log(err.message); // TypeError: failed to fetch
//   }
// }

// f();


// async function f() {

//   try {
//     let response = await fetch('/no-user-here');
//     let user = await response.json();
//   } catch(err) {
//     // catches errors both in fetch and response.json
//     console.log(err.message);
//   }
// }

// f();

async function f() {
  let response = await fetch('http://no-such-url');
}

// f() becomes a rejected promise
f().catch(e => console.log(e.message)); // TypeError: fetch failed // (*)