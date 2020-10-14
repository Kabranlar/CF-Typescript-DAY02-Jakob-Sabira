var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*person class*/
var Person = /** @class */ (function () {
    function Person(fName, lName, age, job) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.jobTitle = job;
    }
    Person.prototype.introduce = function () {
        return "Hello there, my name is " + this.firstName + ". I am " + this.age + " years old and I am a " + this.jobTitle + ".";
    };
    return Person;
}());
/*basic 1_____________________________________________________*/
var jakob = new Person("Jakob", "Can", 30, "Webdeveloper");
console.log(jakob.introduce());
/*basic 2_____________________________________________________*/
var PaidPerson = /** @class */ (function (_super) {
    __extends(PaidPerson, _super);
    function PaidPerson(fName, lName, age, job, sal, location) {
        var _this = _super.call(this, fName, lName, age, job) || this;
        _this.salary = sal;
        _this.jobLocation = location;
        return _this;
    }
    PaidPerson.prototype.introduce = function () {
        return _super.prototype.introduce.call(this) + " I work in " + this.jobLocation + " and I get " + this.salary + " Euros every month.";
    };
    return PaidPerson;
}(Person));
var sabira = new PaidPerson("Sabira", "Aliu", 36, "Webdeveloper", 3000, "Vienna");
console.log(sabira.introduce());
