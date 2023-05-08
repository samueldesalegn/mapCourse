// Exercise 01
// Re-write the following code using TypeScript. 
// Try to be as explicit as possible and add Types to everything you can. 
// When you are done, transpile the TS code to JS code and inspect the JS code.

// Option 1.1
/*

class University {
		name: string;
		dept: string;
    constructor(name: string, dept: string) {
        this.name = name;
        this.dept = dept;
    }
    graduation(year: number) {
        console.log(`Graduating ${this.dept} ${year} students`);
    }
}

let miu: University = new University("MIU", "MSD");
miu.graduation(2021);

*/

// Option 1.2
class University {
	constructor(public name: string, public dept: string) {}
	graduation(year: number) {
			console.log(`Graduating ${this.dept} ${year} students`);
	}
}

let miu = new University("MIU", "MSD");
miu.graduation(2021);



// Exercise 02
// Re-write the following code using TypeScript. 
// Try to be as explicit as possible and add Types to everything you can. When you are done, 
// transpile the TS code to JS code and inspect the JS code.

// Option 2.1 Using interface

interface BankAccount {
money: number;
deposit(value: number): void;
}

let bankAccount: BankAccount = { 
	money: 2000, 
	deposit(value: number) { 
		this.money += value; 
	} 
}; 

let myself: {name: string; bankAccount: BankAccount; hobbies: string[]} = { 
	name: "John", 
	bankAccount: bankAccount, 
	hobbies: ["Violin", "Cooking"] 
}; 

myself.bankAccount.deposit(3000); 
console.log(myself);

// Option 2.2 using abstract class

// abstract class BankAccount {
// 	money: number;
// 	constructor(money: number) {
// 		this.money = money;
// 	}
// 	abstract deposit(value: number): void
// }

// class Account extends BankAccount {
// 	constructor(money: number) {
// 		super(money);
// 	}
// 	deposit(value: number): void {
// 			this.money += value;
// 	}
// }

// let bankAccount: BankAccount = { 
// 	money: 2000, 
// 	deposit(value: number) { 
// 		this.money += value; 
// 	} 
// }; 

// let myself: {name: string; bankAccount: BankAccount; hobbies: string[]} = { 
// 	name: "John", 
// 	bankAccount: bankAccount, 
// 	hobbies: ["Violin", "Cooking"] 
// }; 

// myself.bankAccount.deposit(3000); 
// console.log(myself);



// Exercise 03
// Re-write the following code using TypeScript Class syntax. 
// Try to be as explicit as possible and add Types to everything you can. 
// When you are done, transpile the TS code to JS code and inspect the JS code.

class Car {
	name: string;
	acceleration: number;
    constructor(name:string) {
        this.name = name;
        this.acceleration = 0;
    }
    honk() {
        console.log(` ${this.name} is saying: Toooooooooot!`);
    }
    accelerate(speed: number) {
        this.acceleration = this.acceleration + speed;
    }
}

let car = new Car("BMW");
car.honk(); // BMW is saying: Toooooooooot!
console.log(car.acceleration); // 0
car.accelerate(60);
console.log(car.acceleration); // 60


// Exercise 04
// Re-write the following code using TypeScript Class syntax. 
// Try to be as explicit as possible and add Types to everything you can. 
// When you are done, transpile the TS code to JS code and inspect the JS code.

// let baseObject = { 
// 	width: 0, 
// 	length: 0 
// }; 
// let rectangle = Object.create(baseObject); 

// rectangle.width = 5; 
// rectangle.length = 2; 

// rectangle.calcSize = function() { 
// 	return this.width * this.length; 
// }; 

// console.log(rectangle.calcSize()); // 10

// //Option 4.1

// class Rectangle {
	
// 	constructor(public width: number =0, public length: number = 0){}
// 	calcSize (): number {
// 		return this.width * this.length;
// 	}
// }

// let rectangle = new Rectangle(5, 2);
// console.log(rectangle.calcSize());


// Option 4.2
class Rectangle {
	width: number = 0;
	length: number = 0;
	constructor( width: number, length: number){
		this.width = width;
		this.length = length;
	}
	calcSize (): number {
		return this.width * this.length;
	}
}

let rectangle = new Rectangle(5, 2);
console.log(rectangle.calcSize());


