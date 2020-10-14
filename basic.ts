/*person class*/
class Person {
	firstName: string;
	lastName: string;
	age: number;
	jobTitle: string;

	constructor(fName: string, lName: string, age: number, job: string) {
		this.firstName = fName;
		this.lastName = lName;
		this.age = age;
		this.jobTitle = job;
	}

	introduce() {
		return "Hello there, my name is " + this.firstName + ". I am " + this.age + " years old and I am a " + this.jobTitle + ".";
		
	}
}

/*basic 1_____________________________________________________*/
var jakob = new Person ("Jakob", "Can", 30, "Webdeveloper");
console.log(jakob.introduce());

/*basic 2_____________________________________________________*/
class PaidPerson extends Person {
	salary: number;
	jobLocation: string;
	
	constructor(fName: string, lName: string, age: number, job: string, sal: number, location: string) {
		super(fName, lName, age, job);
		this.salary = sal;
		this.jobLocation = location;
	}

	introduce() {
		return super.introduce() + " I work in " + this.jobLocation + " and I get " + this.salary + " Euros every month."
	}
}

var sabira = new PaidPerson ("Sabira", "Aliu", 36, "Webdeveloper", 3000, "Vienna");
console.log(sabira.introduce());