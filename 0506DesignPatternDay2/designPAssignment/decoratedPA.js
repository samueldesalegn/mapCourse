/* eslint-disable require-jsdoc */
// Exercise 02
// Implement Decorator pattern to add a logger to any object (additional class is needed).
//  A logger method will log a message to the console.

// When you finish, you can use the code below to test:

class User {
    
	constructor(name) {
			this.name = name;
	}
 
	logger() {
			console.log("User: " + this.name);
	}
}

class DecoratedUser {
	constructor(user, street, city) {
			this.user = user;
			this.name = user.name; // ensures interface stays the same
			this.street = street;
			this.city = city;
	}
	
	logger() {
			user.logger();
			//save to DB
			//send email
			console.log("Decorated User: " + this.name + ", " +
					this.street + ", " + this.city);
	}
}

const user = new User("Kelly");

const decorated = new DecoratedUser(user, "Broadway", "New York");
decorated.logger();

