"use strict";
let age = 23;
// age = "string";
console.log(age);
function display(id, name) {
    console.log(`Id: ${id}, Name: ${name}`);
}
let num = 5;
num = true;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let c = Color.Red;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 0] = "Red";
    Color2[Color2["Green"] = 1] = "Green";
    Color2[Color2["Blue"] = 2] = "Blue";
})(Color2 || (Color2 = {}));
;
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 3] = "Red";
    Color3[Color3["Green"] = 4] = "Green";
    Color3[Color3["Blue"] = 5] = "Blue";
})(Color3 || (Color3 = {}));
;
console.log(Color.Green);
let message = "Hello";
var week;
(function (week) {
    week[week["Monday"] = 0] = "Monday";
    week[week["Tuesday"] = 1] = "Tuesday";
    week[week["Wednesday"] = 2] = "Wednesday";
    week[week["Thursday"] = 3] = "Thursday";
    week[week["Friday"] = 4] = "Friday";
    week[week["Saturday"] = 5] = "Saturday";
    week[week["Sunday"] = 6] = "Sunday";
})(week || (week = {}));

let day = week.Monday;
console.log(day);
