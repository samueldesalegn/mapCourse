interface Imessage {
	text: string;
	offset: [number, number]
}


const message: Imessage[] = [
	{"text": "Save", "offset": [10, 30]},
	{"text": "Help", "offset": [0, 50]},
	{"text": "Quit", "offset": [30, 10]}
];



const message1: Imessage[] = [
	{text: "Save", offset: [10, 30]},
	{text: "Help", offset: [0, 50]},
	{text: "Quit", offset: [30, 10]}
];


const message2 = [
	{text: "Save", offset: [10, 30]},
	{text: "Help", offset: [0, 50]},
	{text: "Quit", offset: [30, 10]}
];


const img: {src: string, coords: Array<number>, alignment: string} = {
	"src": "images/log.png",
	"coords": [250, 150, 350, 400],
	"alignment": "center"
}

interface IStudent {
	firstname: string,
	middlename?: string,
	lastname: string,
	courses: Array<string | number>
	// courses: (string | number)[]
}

const students: IStudent[] = [
	{firstname: "John", lastname: "Smith", courses: [445, "MWP", 330, "React"]},
	{firstname: "Mohammed", middlename: "Md", lastname: "Ahmed", courses: ["MWP", 220, "Angular", "React", 530]},
	{firstname: "Edward", lastname: "Jack", courses: [345, "WAP", 220, "React", 410]}

];


interface Book {
	bookName: string;
	isbn: number;

}

class Course2 {
	// private code: number;
	constructor(public name: string, private code: number) {
		// this.code = code;
	}

	useBook(book: Book) {
		console.log(`Course ${this.name} is using the text book: ${book.bookName} whose ISBN= ${book.isbn}`)
	}
}



class Meditator {
	name: string;
	constructor(name: string) { 
		this.name = name; 
	}
	meditate(duration: number = 20) {
	console.log(this.name + " is meditating for " + duration
	+ " mins!");
	}
	}
	class Sidha extends Meditator {
	constructor(name: string) { super(name) }
	meditate(duration: number = 40) {
	console.log('Medit ation started ')
	super.meditate(duration);
	}
	}
	let john = new Sidha("John ");
	john.meditate(); // Meditation started John is meditating for 40 mins!
	

