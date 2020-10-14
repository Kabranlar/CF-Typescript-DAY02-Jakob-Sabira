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
var Vehicle = /** @class */ (function () {
    function Vehicle(m, km, seats, fuel, year, img) {
        this.model = m;
        this.kmLeft = km;
        this.numberSeats = seats;
        this.fuelType = fuel;
        this.productionYear = year;
        this.image = img;
    }
    Vehicle.prototype.calcPrice = function () {
        this.price = Math.floor(10000 / this.productionYear * this.numberSeats + this.kmLeft);
        return this.price;
    };
    return Vehicle;
}());
var Motorbike = /** @class */ (function (_super) {
    __extends(Motorbike, _super);
    function Motorbike(m, km, seats, fuel, year, cc, img) {
        var _this = _super.call(this, m, km, seats, fuel, year, img) || this;
        _this.cc = cc;
        return _this;
    }
    Motorbike.prototype.calcPrice = function () {
        return _super.prototype.calcPrice.call(this);
    };
    return Motorbike;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(m, km, seats, fuel, year, heigth, img) {
        var _this = _super.call(this, m, km, seats, fuel, year, img) || this;
        _this.heigth = heigth;
        return _this;
    }
    Truck.prototype.calcPrice = function () {
        return _super.prototype.calcPrice.call(this);
    };
    return Truck;
}(Vehicle));
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile(m, km, seats, fuel, year, img, ac) {
        var _this = _super.call(this, m, km, seats, fuel, year, img) || this;
        _this.ac = ac;
        return _this;
    }
    Automobile.prototype.calcPrice = function () {
        return _super.prototype.calcPrice.call(this);
    };
    Automobile.prototype.isAC = function () {
        return this.ac;
    };
    return Automobile;
}(Vehicle));
var Aircraft = /** @class */ (function (_super) {
    __extends(Aircraft, _super);
    function Aircraft(m, km, seats, fuel, year, img, type) {
        var _this = _super.call(this, m, km, seats, fuel, year, img) || this;
        _this.type = type;
        return _this;
    }
    Aircraft.prototype.calcPrice = function () {
        return _super.prototype.calcPrice.call(this);
    };
    return Aircraft;
}(Vehicle));
/*var bike = new Motorbike("Norton", 37000, 2, "gas", 1950, 125);
console.log(bike.calcPrice());*/
var carArray = [];
for (var i_1 = 0; i_1 < 6; ++i_1) {
    var tmp = new Automobile("Honda", 12000, 5, "gas", 2008, "https://upload.wikimedia.org/wikipedia/commons/0/0d/2019_Honda_Civic_coupe_%28facelift%29%2C_front_12.16.19.jpg", true);
    carArray.push(tmp);
}
for (var i = 0; i < carArray.length; ++i) {
    $(".cars").append("\n\t<div class=\"col-md-5 card mb-3 p-2\" style=\"width: 18rem;\">\n  \t\t<img class=\"card-img-top\" src=\"" + carArray[i].image + "\" alt=\"Card image cap\">\n  \t\t<div class=\"card-body\">\n\t\t\t<h5 class=\"card-title\">" + carArray[i].model + "</h5>\n\t    \t<p class=\"card-text\">" + carArray[i].productionYear + "</p>\n\t    \t<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#car" + i + "\">more info</button>\n  \t\t</div>\n\t</div>\n\n\t<!-- Modal -->\n\t<div class=\"modal fade\" id=\"car" + i + "\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n\t  <div class=\"modal-dialog\" role=\"document\">\n\t    <div class=\"modal-content\">\n\t      <div class=\"modal-header\">\n\t        <h5 class=\"modal-title\" id=\"exampleModalLabel\">" + carArray[i].model + "</h5>\n\t        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t          <span aria-hidden=\"true\">&times;</span>\n\t        </button>\n\t      </div>\n\t      <div class=\"modal-body\">\n\t        <p>Production year: " + carArray[i].productionYear + "</p>\n\t        <p>Fuel: " + carArray[i].fuelType + "</p>\n\t        <p>Mileage: " + carArray[i].kmLeft + "</p>\n\t        <p>Number of seats: " + carArray[i].seats + "</p>\n\t        <p carID=\"" + i + "\"></p>\n\t      </div>\n\t      <div class=\"modal-footer\">\n\t        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t        <button type=\"button\" index = \"" + i + "\" class=\"calculate btn btn-success\">Calculate Price</button>\n\t      </div>\n\t    </div>\n\t  </div>\n\t</div>\n\t");
}
$(".cars").delegate(".calculate", "click", function () {
    var tmp = $(this).attr("index");
    console.log(tmp);
    $("p[carID='" + tmp + "']").text("Price: " + carArray[0].calcPrice() + " €");
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
