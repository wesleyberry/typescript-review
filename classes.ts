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
interface UserInterface {
    name: string;
    email: string;
    age: number;
    register();
    payInvoice();
}

class User implements UserInterface{
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log(`User created: ${this.name}.`);
    }

    register() {
        console.log(`${this.name} has been registered.`);
    }

    payInvoice() {
        console.log(`${this.name} has paid their invoice.`)
    }
}

class Member extends User {
    id: number;

    constructor(id: number, name: string, email: string, age: number) {
        super(name, email, age);
        this.id = id;
    }
    payInvoice() {
        super.payInvoice();
    }
}

let mike: User = new Member(1, 'Mike', 'mike@email.com', 30);
mike.register();
mike.payInvoice();