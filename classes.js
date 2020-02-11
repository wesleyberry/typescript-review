// interface UserInterface {
//     name: string;
//     email: string;
//     age: number;
//     register();
//     payInvoice();
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.walk = function (distance) {
        console.log("Hi, my name is " + this.name + " and I walked " + distance + " meters");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(theName, breed) {
        var _this = _super.call(this, theName) || this;
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.barked = function (numBarks) {
        console.log(this.name + " barked " + numBarks + " times today.");
    };
    return Dog;
}(Animal));
var filo = new Dog('Filo', 'Golden Retriever');
// filo.barked(15);
