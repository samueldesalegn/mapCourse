/* eslint-disable require-jsdoc */
class Subject {
	constructor() {
		this.obesrvers = {};
	}

	on(event, fn) {
		if (this.obesrvers[event]) {
			this.obesrvers[event].push(fn);
		}else {
			this.obesrvers[event] = [fn];
		}
	}

	emit(event, msg) {
		this.obesrvers[event].forEach(ob =>ob(msg));
	}
}





const subject = new Subject();
subject.on('eat', console.log); // register an observer
subject.on('study', console.log); // register an observer

function foo(msg) {
    console.log('foo: ' + msg);
}
subject.on('eat', foo);
subject.on('study', foo);

subject.emit('eat', 'Corn');
//output for Line above: subject.emit('eat', 'Corn');
// Corn
// foo: Corn
subject.emit('study', 'cs445');
//output for Line above: subject.emit('study', 'cs445');
// cs445
// foo: cs445