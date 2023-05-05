interface IEmployee {
	fname: string;
	lname: string;
	age: number;

	setFname(fname: string): void;
	setLname: (lname: string) => void;
	getAge: () => number;
}


// const emp: IEmployee = {
// 	fname: 'Edward',
// 	lname: 'Smith',
// 	age: 20,
// 	setFname(fname: string): void {
// 		this.fname = fname;
// 	}
// }

interface IPerson {
	// fname: string;
	// lname: string;
}

interface IPlay {}

class Address {}


class PhoneNumber {
	
}

// class Student extends Address implements IPerson, IPlay {

// }

// let arr = ["arr", 4, true, null];

console.log("Hello World");

class Vehicle {
	// private drive(): void {
	// 	console.log("Chugga chuga");
	// }
	color: string = 'red';
	honk(): void {
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

function displays(id: number, name: string) {
	console.log(`id= ${id}, Name= ${name}`);
}


displays(113880, "Samuel");

let employee1: {
	name: string,
	id: number
}

employee1 = {
	name: "Samuel",
	id: 100
}


enum Color { Red=1, Green, Blue=5 };
let c: Color = Color.Blue;
console.log(c);
console.log(Color.Green);
enum Color2 { Red = 0, Green, Blue };
enum Color3 { Red = 3, Green, Blue };



// class University {
// 	constructor(public name: string, public dept: string) {
// 			// this.name = name;
// 			// this.dept = dept;
// 	}
// 	graduation(year: number) {
// 			console.log(`Graduating ${this.dept} ${year} students`);
// 	}
// }

// let miu = new University("MIU", "MSD");
// miu.graduation(2021);



// interface IKeyPair {
// 	readonly key: number;
// 	value?: string;
// 	}
	// let kv1: IKeyPair = { key: 1, value: "John" };
	// let kv2: IKeyPair = { key: 2 };
	// let kv3: IKeyPair = { key: 2, age: 20 }; // Compiler error
	// kv2.key = 3; // Compiler error

	interface ICourse {
		code: number;
		name: string;
		grade: number;
		setGrade(grade: number): void;
		getGrade(): number;
		}
		

	class Course implements ICourse {
		
		grade: number = 0;
		constructor(public code: number, public name: string) {
		this.code = code;
		this.name = name;
		}
		setGrade(grade: number = 0): void {
		this.grade = grade;
		}
		getGrade(): number {
		return this.grade;
		}
		}
		let course = new Course(445, "Modern Asynchronous Programming");
		course.setGrade(90);
		console.log(course.getGrade());