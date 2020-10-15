/*arrays that hold the respective vehicle objects*/
var carArray:Array<any> = [];
var motorbikesArray:Array<any> = [];
var truckArray:Array<any> = [];
var aircraftArray:Array<any> = [];

class Vehicle {
	model: string;
	kmLeft: number;
	numberSeats: number;
	fuelType: string;
	productionYear: number;
	price: number;
	image: string;

	constructor(m: string, km: number, seats: number, fuel: string, year: number, img: string) {
		this.model = m;
		this.kmLeft = km;
		this.numberSeats = seats;
		this.fuelType = fuel;
		this.productionYear = year;
		this.image = img;
	}

	calcPrice() {
		this.price = Math.floor(10000 / this.productionYear * this.numberSeats + this.kmLeft);
		return this.price;
	}

	
}

class Motorbike extends Vehicle {
	cc: number;

	constructor(m: string, km: number, seats: number, fuel: string, year: number, cc: number, img: string) {
		super(m, km, seats, fuel, year, img);
		this.cc = cc;
	}

	calcPrice() {
		return super.calcPrice();
	}
}

class Truck extends Vehicle {
	heigth: number;

	constructor(m: string, km: number, seats: number, fuel: string, year: number, heigth: number, img: string) {
		super(m, km, seats, fuel, year, img);
		this.heigth = heigth;
	}

	calcPrice() {
		return super.calcPrice();
	}
}

class Automobile extends Vehicle {
	ac: boolean;
	index: number;

	constructor(m: string, km: number, seats: number, fuel: string, year: number, img: string, ac: boolean) {
		super(m, km, seats, fuel, year, img);
		this.ac = ac;
		carArray.push(this);
		this.index = carArray.length;
		console.log(this.index);
	}

	calcPrice() {
		return super.calcPrice();
	}

	isAC() {
		return this.ac;
	}

	render(){
		return `
		<div class="col-md-5 card mb-3 p-2" style="width: 18rem;">
  		<img class="card-img-top" src="${this.image}" alt="Card image cap">
  		<div class="card-body">
			<h5 class="card-title">${this.model}</h5>
	    	<p class="card-text">${this.productionYear}</p>
	    	<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#car${this.index}">more info</button>
  		</div>
		</div>

		<!-- Modal -->
		<div class="modal fade" id="car${this.index}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <h5 class="modal-title" id="exampleModalLabel">${this.model}</h5>
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div class="modal-body">
		        <p>Production year: ${this.productionYear}</p>
		        <p>Fuel: ${this.fuelType}</p>
		        <p>Mileage: ${this.kmLeft}</p>
		        <p>Number of seats: ${this.numberSeats}</p>
		        <p carID="${this.index}"></p>
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
		        <button type="button" index = "${this.index}" class="calculate btn btn-success">Calculate Price</button>
		      </div>
		    </div>
		  </div>
		</div>
		`
	}
}

class Aircraft extends Vehicle {
	type: string;

	constructor(m: string, km: number, seats: number, fuel: string, year: number, img: string, type: string) {
		super(m, km, seats, fuel, year, img);
		this.type = type;
	}

	calcPrice() {
		return super.calcPrice();
	}
}

$("#cars").delegate(".calculate", "click", function(){
	var tmp = Number($(this).attr("index"));
	console.log(tmp);
	$(`p[carID='${tmp}']`).text(`Price: ${carArray[tmp-1].calcPrice()} €`);
});

new Automobile("Honda", 12000, 5, "Gas", 2008, "https://upload.wikimedia.org/wikipedia/commons/0/0d/2019_Honda_Civic_coupe_%28facelift%29%2C_front_12.16.19.jpg", true);
new Automobile("Suzuki", 5700, 4, "Gas", 2018, "https://www.suzuki.at/auto/offentliche-bilder/inhalte/angebote-modelle/swift-hybrid-2020/swift-hybrid-mandantenbanner/@@images/bb501c76-db86-451a-a79a-1f2b6068928b.jpeg", true);
new Automobile("Tesla", 1000, 5, "Electricity", 2017, "https://tesla-cdn.thron.com/delivery/public/image/tesla/35d15221-0a5f-4dce-b484-a4db67b81dd2/bvlatuR/std/0x0/model-s@2x", true);
new Automobile("Mercedes", 23000, 4, "Diesel", 1991, "https://i.pinimg.com/originals/2d/97/ba/2d97ba56023f3e8e3b6c6c8ee325bc50.jpg", false);

for(let i in carArray){
	document.getElementById("cars").innerHTML += carArray[i].render();
}