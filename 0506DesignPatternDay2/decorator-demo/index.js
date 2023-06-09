/* eslint-disable require-jsdoc */
/**
 * 
 */
class User {
    
    constructor(name) {
        this.name = name;
    }
   
    log() {
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
    
    log() {
        user.log();
        //save to DB
        //send email
        console.log("Decorated User: " + this.name + ", " +
            this.street + ", " + this.city);
    }
}


const user = new User("Kelly");
user.log();

const decorated = new DecoratedUser(user, "Broadway", "New York");
decorated.log();
