/* eslint-disable require-jsdoc */
class Subject  {
	constructor() {

		this.observers = [];
	}

	
	subscribeObserver(observer) {
			this.observers.push(observer);
	}
	unsubscribeObserver(observer) {
			// eslint-disable-next-line no-var
			var index = this.observers.indexOf(observer);
			if(index > -1) {
				this.observers.splice(index, 1);
			}
	}
	notifyObserver(observer) {
			let index = this.observers.indexOf(observer);
			if(index > -1) {
				this.observers[index].notify(index+1);
			}
	}
	notifyAllObservers() {
			for(let i = 0; i < this.observers.length; i++){
				this.observers[i].notify(i+1);
			}
		}
	}

class Observer {
	
	notify(index) {
			console.log("Observer " + index + " is notified!");
	}
	
}

let subject = new Subject();

let observer1 = new Observer();
let observer2 = new Observer();
let observer3 = new Observer();
let observer4 = new Observer();

subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);
subject.subscribeObserver(observer4);

subject.notifyObserver(observer2); // Observer 2 is notified!

subject.notifyAllObservers();
// Observer 1 is notified!
// Observer 2 is notified!
// Observer 3 is notified!
// Observer 4 is notified!