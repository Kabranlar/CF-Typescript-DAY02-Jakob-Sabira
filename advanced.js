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
/*arrays that hold the respective vehicle objects*/
var carArray = [];
var motorbikesArray = [];
var truckArray = [];
var aircraftArray = [];
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
        carArray.push(_this);
        _this.index = carArray.length;
        console.log(_this.index);
        return _this;
    }
    Automobile.prototype.calcPrice = function () {
        return _super.prototype.calcPrice.call(this);
    };
    Automobile.prototype.isAC = function () {
        return this.ac;
    };
    Automobile.prototype.render = function () {
        return "\n\t\t<div class=\"col-md-5 card mb-3 p-2\" style=\"width: 18rem;\">\n  \t\t<img class=\"card-img-top\" src=\"" + this.image + "\" alt=\"Card image cap\">\n  \t\t<div class=\"card-body\">\n\t\t\t<h5 class=\"card-title\">" + this.model + "</h5>\n\t    \t<p class=\"card-text\">" + this.productionYear + "</p>\n\t    \t<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#car" + this.index + "\">more info</button>\n  \t\t</div>\n\t\t</div>\n\n\t\t<!-- Modal -->\n\t\t<div class=\"modal fade\" id=\"car" + this.index + "\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n\t\t  <div class=\"modal-dialog\" role=\"document\">\n\t\t    <div class=\"modal-content\">\n\t\t      <div class=\"modal-header\">\n\t\t        <h5 class=\"modal-title\" id=\"exampleModalLabel\">" + this.model + "</h5>\n\t\t        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t          <span aria-hidden=\"true\">&times;</span>\n\t\t        </button>\n\t\t      </div>\n\t\t      <div class=\"modal-body\">\n\t\t        <p>Production year: " + this.productionYear + "</p>\n\t\t        <p>Fuel: " + this.fuelType + "</p>\n\t\t        <p>Mileage: " + this.kmLeft + "</p>\n\t\t        <p>Number of seats: " + this.numberSeats + "</p>\n\t\t        <p carID=\"" + this.index + "\"></p>\n\t\t      </div>\n\t\t      <div class=\"modal-footer\">\n\t\t        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t        <button type=\"button\" index = \"" + this.index + "\" class=\"calculate btn btn-success\">Calculate Price</button>\n\t\t      </div>\n\t\t    </div>\n\t\t  </div>\n\t\t</div>\n\t\t";
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
$("#cars").delegate(".calculate", "click", function () {
    var tmp = Number($(this).attr("index"));
    console.log(tmp);
    $("p[carID='" + tmp + "']").text("Price: " + carArray[tmp - 1].calcPrice() + " \u20AC");
});
new Automobile("Honda", 12000, 5, "Gas", 2008, "https://upload.wikimedia.org/wikipedia/commons/0/0d/2019_Honda_Civic_coupe_%28facelift%29%2C_front_12.16.19.jpg", true);
new Automobile("Suzuki", 5700, 4, "Gas", 2018, "https://www.suzuki.at/auto/offentliche-bilder/inhalte/angebote-modelle/swift-hybrid-2020/swift-hybrid-mandantenbanner/@@images/bb501c76-db86-451a-a79a-1f2b6068928b.jpeg", true);
new Automobile("Tesla", 1000, 5, "Electricity", 2017, "https://tesla-cdn.thron.com/delivery/public/image/tesla/35d15221-0a5f-4dce-b484-a4db67b81dd2/bvlatuR/std/0x0/model-s@2x", true);
new Automobile("Mercedes", 23000, 4, "Diesel", 1991, "https://i.pinimg.com/originals/2d/97/ba/2d97ba56023f3e8e3b6c6c8ee325bc50.jpg", false);
for (var i in carArray) {
    document.getElementById("cars").innerHTML += carArray[i].render();
}
