class Vehicle {
	model: string;
	kmLeft: number;
	numberSeats: number;
	fuelType: string;
	productionYear: number;
	price: number;

	constructor(m: string, km: number, seats: number, fuel: string, year: number) {
		this.model = m;
		this.kmLeft = km;
		this.numberSeats = seats;
		this.fuelType = fuel;
		this.productionYear = year;
	}

	calcPrice() {
		this.price = Math.floor(10000 / this.productionYear * this.numberSeats + this.kmLeft);
		return this.price;
	}
}

class Motorbike extends Vehicle {
	cc: number;

	constructor(m: string, km: number, seats: number, fuel: string, year: number, cc: number) {
		super(m, km, seats, fuel, year);
		this.cc = cc;
	}

	calcPrice() {
		return super.calcPrice();
	}
}

class Truck extends Vehicle {
	heigth: number;

	constructor(m: string, km: number, seats: number, fuel: string, year: number, heigth: number) {
		super(m, km, seats, fuel, year);
		this.heigth = heigth;
	}

	calcPrice() {
		return super.calcPrice();
	}
}

class Automobile extends Vehicle {
	ac: boolean;

	constructor(m: string, km: number, seats: number, fuel: string, year: number, ac: boolean) {
		super(m, km, seats, fuel, year);
		this.ac = ac;
	}

	calcPrice() {
		return super.calcPrice();
	}

	isAC() {
		return this.ac;
	}
}

class Aircraft extends Vehicle {
	type: string;

	constructor(m: string, km: number, seats: number, fuel: string, year: number, type: string) {
		super(m, km, seats, fuel, year);
		this.type = type;
	}

	calcPrice() {
		return super.calcPrice();
	}
}

var bike = new Motorbike("Norton", 37000, 2, "gas", 1950, 125);
console.log(bike.calcPrice());