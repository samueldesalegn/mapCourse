// new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     reject(new Error("Whoops!"));
//   }, 1000);
// }).catch(console.log);


new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(console.log);



// new Promise((resolve, reject) => {
//   reject(new Error("Whoops!"));
// }).catch(console.error); // Error: Whoops!