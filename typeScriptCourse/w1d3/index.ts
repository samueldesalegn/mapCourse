let age: number = 23;
// age = "string";
console.log(age);

function display(id: number, name: string): void{
	console.log(`Id: ${id}, Name: ${name}`);
}

let num: any = 5;
num = true;


enum Color { Red, Green, Blue };
let c: Color = Color.Red;
enum Color2 { Red = 0, Green, Blue };
enum Color3 { Red = 3, Green, Blue };
console.log(Color.Green);

let message = "Hello";

enum week {Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday};
let day: week = week.Monday;
console.log(day);




class Course {
	public name: string;
	protected code: number;
	constructor(name: string, code: number) {
		this.name = name;
		this.code = code;
	}
}

class MapCourse extends Course {
	private details: string;
	constructor(name: string, code: number, dept: string) {
		super(name, code);
		this.details = `${dept}-${this.code}`;
	}
}

let map = new MapCourse("Modern Async Programming", 445, " Computer Science");
