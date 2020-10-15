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
//Automobile
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




//Aircraft
class Aircraft extends Vehicle {
	type: string;

	constructor(m: string, km: number, seats: number, fuel: string, year: number, img: string, type: string) {
		super(m, km, seats, fuel, year, img);
		this.type = type;
		aircraftArray.push(this);
		this.index = aircraftArray.length;
	}

	calcPrice() {
		return super.calcPrice();
	}

	render(){
		return `
		<div class="col-md-5 card mb-3 p-2" style="width: 18rem;">
  		<img class="card-img-top" src="${this.image}" alt="Card image cap">
  		<div class="card-body">
			<h5 class="card-title">${this.model}</h5>
	    	<p class="card-text">${this.productionYear}</p>
	    	<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#aircraft${this.index}">more info</button>
  		</div>
		</div>

		<!-- Modal -->
		<div class="modal fade" id="aircraft${this.index}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
				<p>Type: ${this.type}</p>
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

}
$("#aircraft").delegate(".calculate", "click", function(){
	var tmp = Number($(this).attr("index"));
	console.log(tmp);
	$(`p[carID='${tmp}']`).text(`Price: ${aircraftArray[tmp-2].calcPrice()} €`);
});

new Aircraft("Cessna 172", 12000, 5, "Jet Fuel", 2008, "https://www.google.at/search?q=aircraft+types+c172&sxsrf=ALeKk0326Bo3WDLYCEe4XZHwoKvtgp3QEg:1602753506438&tbm=isch&source=iu&ictx=1&fir=7-U1GjE8t7pdeM%252CY-S7Nn6iRJjj6M%252C_&vet=1&usg=AI4_-kTDcfGykMocEj_NrW4YFCz3byYRgw&sa=X&ved=2ahUKEwigmKeLorbsAhXRGuwKHc0BCDQQ9QF6BAgNEAM#imgrc=7-U1GjE8t7pdeM","comercial");
new Aircraft("Eurofighter Airbus", 5700, 2, "Jet Fuel", 2018, "https://www.google.at/imgres?imgurl=https%3A%2F%2Fairbus-h.assetsadobe2.com%2Fis%2Fimage%2Fcontent%2Fdam%2Fchannel-specific%2Fwebsite-%2Fproducts-and-services%2Fdefence%2Feurofighter%2Feurofighter-typhoon-a-powerful-force-multiplier-1802.jpg%3Fwid%3D1920%26fit%3Dfit%2C1%26qlt%3D85%2C0&imgrefurl=https%3A%2F%2Fwww.airbus.com%2Fdefence%2Feurofighter.html&tbnid=vnblpgokpu32GM&vet=12ahUKEwiApYugo7bsAhUHghoKHVGcC0YQMygAegUIARCjAQ..i&docid=QG-tNGxxt5M3uM&w=1920&h=1140&q=eurofighter%20airbus&ved=2ahUKEwiApYugo7bsAhUHghoKHVGcC0YQMygAegUIARCjAQ","comercial");
new Aircraft("Mooney Ovation", 1000, 5, "Jet Fuel", 2017, "https://tesla-cdn.thron.com/delivery/public/image/tesla/35d15221-0a5f-4dce-b484-a4db67b81dd2/bvlatuR/std/0x0/model-s@2x");
new Aircraft("Diamond Twin Star", 23000, 4, "DJet Fuel", 1991, "https://www.diamondaircraft.com/fileadmin/_processed_/3/5/csm_DA42-VI_Reserve-Auswahl-Bilder_Bild-_14__f4797babaa.jpg","comercial");

for(let i in aircraftArray){
	document.getElementById("aircraft").innerHTML += aircraftArray[i].render();
}


/////////////////////////////////////////////////////////////////////


$("#cars").delegate(".calculate", "click", function(){
	var tmp = Number($(this).attr("index"));
	console.log(tmp);
	$(`p[carID='${tmp}']`).text(`Price: ${carArray[tmp-1].calcPrice()} €`);
});

new Automobile("Honda", 12000, 5, "Gas", 2008, "https://upload.wikimedia.org/wikipedia/commons/0/0d/2019_Honda_Civic_coupe_%28facelift%29%2C_front_12.16.19.jpg", true);
new Automobile("Suzuki", 5700, 4, "Gas", 2018, "https://www.suzuki.at/auto/offentliche-bilder/inhalte/angebote-modelle/swift-hybrid-2020/swift-hybrid-mandantenbanner/@@images/bb501c76-db86-451a-a79a-1f2b6068928b.jpeg", true);
new Automobile("Tesla", 1000, 5, "Electricity", 2017, "https://tesla-cdn.thron.com/delivery/public/image/tesla/35d15221-0a5f-4dce-b484-a4db67b81dd2/bvlatuR/std/0x0/model-https://lh3.googleusercontent.com/proxy/YiABxZjLRkhIQeL3YXPCbnbVV53TYGXr8zxI7aohLgMjqSCw9maRqy6LvlXYlmqssHrm7wzD3g1GSkvRhilKc_s38NTfytRi1SWWYodtdIhBer0tDXVDG6j3k_iCHMsfnSKU_msuxJMss@2x", true);
new Automobile("Mercedes", 23000, 4, "Diesel", 1991, "https://i.pinimg.com/originals/2d/97/ba/2d97ba56023f3e8e3b6c6c8ee325bc50.jpg", false);

for(let i in carArray){
	document.getElementById("cars").innerHTML += carArray[i].render();
}