new Promise((resolve, reject) => {

  setTimeout(() => resolve(1), 1000); // (*)

}).then((result) => { // (**)

  console.log(result); // 1
  return result * 2;

}).then((res) => { // (***)

  console.log(res); // 2
  return res * 2;

}).then((result) => {

  console.log(result); // 4
  return result * 2;

}).then((result) => {

  console.log(result); // 8

});