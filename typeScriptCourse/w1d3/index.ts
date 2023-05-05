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