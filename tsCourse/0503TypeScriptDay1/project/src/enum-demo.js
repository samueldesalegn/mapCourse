"use strict";
var Week;
(function (Week) {
    Week[Week["MONDAY"] = 2] = "MONDAY";
    Week[Week["TUESDAY"] = 3] = "TUESDAY";
    Week[Week["WEDNESDAY"] = 4] = "WEDNESDAY";
})(Week || (Week = {}));
let mon = Week.MONDAY;
let tus = Week.TUESDAY;
console.log(Week);
console.log(mon);
console.log(tus);
var Size;
(function (Size) {
    Size["S"] = "Small";
    Size["M"] = "Medium";
    Size["L"] = "Large";
})(Size || (Size = {}));
let small = Size.S;
let large = Size.L;
console.log(small);
console.log(large);
