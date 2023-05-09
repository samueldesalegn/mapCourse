/* eslint-disable require-jsdoc */
// Exercise 03
// Implement Strategy pattern to choose between different logging algorithms, choosing between:

// console.info()
// console.warn()
// console.error()
// console.table() accepts an array of objects
// When you finish, you can use the code below to test:

class Info {
	logging(msg) {
		console.info(msg);
}
}

class Warn {
	logging(msg) {
		console.warn(msg);
  }
}

class Error {
	logging(msg) {
		console.error(msg);
  }
}


class Table {
	logging(msg) {
		console.table(msg);
  }
}

class Strategy {
	setStrategy(method) {
			this.method = method;
	}

	logging(msg) {
			this.method.logging(msg);
	}
	
}



const strategy = new Strategy();

strategy.setStrategy(new Info());
strategy.logging('info....');

strategy.setStrategy(new Warn());
strategy.logging('warn....');

strategy.setStrategy(new Error());
strategy.logging('error....');

strategy.setStrategy(new Table());
strategy.logging(['table', 'table']);