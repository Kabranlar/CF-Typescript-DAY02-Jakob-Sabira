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

	constructor(m: string, km: number, seats: number, fuel: string, year: number, img: string, ac: boolean) {
		super(m, km, seats, fuel, year, img);
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

	constructor(m: string, km: number, seats: number, fuel: string, year: number, img: string, type: string) {
		super(m, km, seats, fuel, year, img);
		this.type = type;
	}

	calcPrice() {
		return super.calcPrice();
	}
}

/*var bike = new Motorbike("Norton", 37000, 2, "gas", 1950, 125);
console.log(bike.calcPrice());*/
var carArray = [];

for (let i = 0; i < 6; ++i) {
	var tmp = new Automobile("Honda", 12000, 5, "gas", 2008, "https://upload.wikimedia.org/wikipedia/commons/0/0d/2019_Honda_Civic_coupe_%28facelift%29%2C_front_12.16.19.jpg", true);
	carArray.push(tmp);
}

for (var i = 0; i < carArray.length; ++i) {

	$(".cars").append(`
	<div class="col-md-5 card mb-3 p-2" style="width: 18rem;">
  		<img class="card-img-top" src="${carArray[i].image}" alt="Card image cap">
  		<div class="card-body">
			<h5 class="card-title">${carArray[i].model}</h5>
	    	<p class="card-text">${carArray[i].productionYear}</p>
	    	<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#car${i}">more info</button>
  		</div>
	</div>

	<!-- Modal -->
	<div class="modal fade" id="car${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title" id="exampleModalLabel">${carArray[i].model}</h5>
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          <span aria-hidden="true">&times;</span>
	        </button>
	      </div>
	      <div class="modal-body">
	        <p>Production year: ${carArray[i].productionYear}</p>
	        <p>Fuel: ${carArray[i].fuelType}</p>
	        <p>Mileage: ${carArray[i].kmLeft}</p>
	        <p>Number of seats: ${carArray[i].seats}</p>
	        <p carID="${i}"></p>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
	        <button type="button" index = "${i}" class="calculate btn btn-success">Calculate Price</button>
	      </div>
	    </div>
	  </div>
	</div>
	`);
}



$(".cars").delegate(".calculate", "click", function(){
	var tmp = $(this).attr("index");
	console.log(tmp);
	$(`p[carID='${tmp}']`).text("Price: " + carArray[0].calcPrice() + " €");
	
	/*$(".calculate").text("Buy immediately!!!");*/
});







/*$(".cars").append(`
	<div class="card" style="width: 18rem;">
  		<img class="card-img-top" src="${carArray[0].image}" alt="Card image cap">
  		<div class="card-body">
			<h5 class="card-title">${carArray[0].model}</h5>
	    	<p class="card-text">${carArray[0].productionYear}</p>
	    	<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">more info</button>
  		</div>
	</div>

	<!-- Modal -->
	<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title" id="exampleModalLabel">${carArray[0].model}</h5>
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          <span aria-hidden="true">&times;</span>
	        </button>
	      </div>
	      <div class="modal-body">
	        <p>Production year: ${carArray[0].productionYear}</p>
	        <p>Fuel: ${carArray[0].fuelType}</p>
	        <p>Mileage: ${carArray[0].kmLeft}</p>
	        <p>Number of seats: ${carArray[0].seats}</p>
	        <p id="test"></p>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
	        <button type="button" class="calculate btn btn-success">Calculate Price</button>
	      </div>
	    </div>
	  </div>
	</div>
	`);

$(".cars").delegate(".calculate", "click", function(){
	$("#test").text("Price: " + carArray[0].calcPrice() + " €");
	$(".calculate").text("Buy immediately!!!");
});*/