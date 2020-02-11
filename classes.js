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
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.sayName = function () {
        console.log("Hello, my name is " + this.name);
    };
    return User;
}());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(name, email, age, memberId) {
        var _this = _super.call(this, name, email, age) || this;
        _this.memberId = memberId;
        return _this;
    }
    Member.prototype.sayName = function () {
        _super.prototype.sayName.call(this);
    };
    Member.prototype.payForMembership = function () {
        console.log(this.name + " has paid his membership fee.");
    };
    return Member;
}(User));
var bob = new User('Bob', 'bob@email.com', 40);
bob.sayName();
var mike = new Member('Mike', 'mike@email.com', 35, 1);
mike.sayName();
mike.payForMembership();
