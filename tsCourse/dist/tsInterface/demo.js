"use strict";
class Address {
}
class PhoneNumber {
}
// class Student extends Address implements IPerson, IPlay {
// }
// let arr = ["arr", 4, true, null];
console.log("Hello World");
class Vehicle {
    constructor() {
        // private drive(): void {
        // 	console.log("Chugga chuga");
        // }
        this.color = 'red';
    }
    honk() {
        console.log('beep');
    }
}
// class Car extends Vehicle {
// private drive(): void {
// 	console.log("Vroom");
// }
// startDriving(): void {
// 	this.drive();
// }
// }
// const car = new Car();
// car.startDriving();
// car.honk();
// console.log(car.color);
function displays(id, name) {
    console.log(`id= ${id}, Name= ${name}`);
}
displays(113880, "Samuel");
let employee1;
employee1 = {
    name: "Samuel",
    id: 100
};
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 5] = "Blue";
})(Color || (Color = {}));
;
let c = Color.Blue;
console.log(c);
console.log(Color.Green);
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
class Course {
    constructor(code, name) {
        this.code = code;
        this.name = name;
        this.grade = 0;
        this.code = code;
        this.name = name;
    }
    setGrade(grade = 0) {
        this.grade = grade;
    }
    getGrade() {
        return this.grade;
    }
}
let course = new Course(445, "Modern Asynchronous Programming");
course.setGrade(90);
console.log(course.getGrade());
