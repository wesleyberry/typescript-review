// interface UserInterface {
//     name: string;
//     email: string;
//     age: number;
//     register();
//     payInvoice();
// }

// class User implements UserInterface{
//     name: string;
//     email: string;
//     age: number;

//     constructor(name: string, email: string, age: number) {
//         this.name = name;
//         this.email = email;
//         this.age = age;

//         console.log('User Created: ' + this.name);
//     }

//     register() {
//         console.log(this.name + ' is now registered.');
//     }

//     payInvoice() {
//         console.log(`${this.name} paid invoice.`);
//     }
// }

// class Member extends User {
//     id: number;

//     constructor(id: number, name: string, email: string, age: number) {
//         super(name, email, age);
//         this.id = id;
//     }

//     payInvoice() {
//         super.payInvoice()
//     }
// }

// let john = new User('John Doe', 'jdoe@email.com', 34);
// john.register();

// let mike: User = new Member(1, 'Mike Smith', 'mike@gmail.com', 33);
// mike.payInvoice();

// -----------------------------------------------------------
// interface UserInterface {
//     name: string;
//     email: string;
//     age: number;
//     register();
//     payInvoice();
// }

// class User implements UserInterface{
//     name: string;
//     email: string;
//     age: number;

//     constructor(name: string, email: string, age: number) {
//         this.name = name;
//         this.email = email;
//         this.age = age;

//         console.log(`User created: ${this.name}.`);
//     }

//     register() {
//         console.log(`${this.name} has been registered.`);
//     }

//     payInvoice() {
//         console.log(`${this.name} has paid their invoice.`)
//     }
// }

// class Member extends User {
//     id: number;

//     constructor(id: number, name: string, email: string, age: number) {
//         super(name, email, age);
//         this.id = id;
//     }
//     payInvoice() {
//         super.payInvoice();
//     }
// }

// let mike: User = new Member(1, 'Mike', 'mike@email.com', 30);
// mike.register();
// mike.payInvoice();

// -----------------------------------------------------------

// abstract class Animal {
//     name: string;

//     constructor(theName: string) {
//         this.name = theName;
//     }

//     walk(distance: number) {
//         console.log(`Hi, my name is ${this.name} and I walked ${distance} meters`);
//     }
// }

// class Dog extends Animal {
//     breed: string;
//     constructor(theName: string, breed: string) {
//         super(theName)
//         this.breed = breed;
//     }

//     barked(numBarks: number) {
//         console.log(`${this.name} barked ${numBarks} times today.`);
//     }
// }

// let filo = new Dog('Filo', 'Golden Retriever');
// filo.barked(15);

// -----------------------------------------------------------
// class Greeter {
//     firstName = 'Xavier';

//     sayHello() {
//         setTimeout(() => {
//             console.log(`Hello, ${this.firstName}`);
//         }, 2000);
//     }
// }

// let greeter = new Greeter();
// greeter.sayHello();
// -----------------------------------------------------------

interface UserCodes {
    name: string;
    email: string;
    age: number;
    sayName();
}

class User implements UserCodes {
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    sayName() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Member extends User {
    memberId: number;

    constructor(name: string, email: string, age: number, memberId: number) {
        super(name, email, age);
        this.memberId = memberId;
    }

    sayName() {
        super.sayName();
    }

    payForMembership() {
        console.log(`${this.name} has paid his membership fee.`);
    }
}

let bob = new User('Bob', 'bob@email.com', 40);
bob.sayName();

let mike = new Member('Mike', 'mike@email.com', 35, 1);
mike.sayName();
mike.payForMembership();