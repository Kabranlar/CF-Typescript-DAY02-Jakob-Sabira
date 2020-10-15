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
//Automobile
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile(m, km, seats, fuel, year, img, ac) {
        var _this = _super.call(this, m, km, seats, fuel, year, img) || this;
        _this.ac = ac;
        carArray.push(_this);
        _this.index = carArray.length;
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
//Aircraft
var Aircraft = /** @class */ (function (_super) {
    __extends(Aircraft, _super);
    function Aircraft(m, km, seats, fuel, year, img, type) {
        var _this = _super.call(this, m, km, seats, fuel, year, img) || this;
        _this.type = type;
        aircraftArray.push(_this);
        _this.index = aircraftArray.length;
        return _this;
    }
    Aircraft.prototype.calcPrice = function () {
        return _super.prototype.calcPrice.call(this);
    };
    Aircraft.prototype.render = function () {
        return "\n\t\t<div class=\"col-md-5 card mb-3 p-2\" style=\"width: 18rem;\">\n  \t\t<img class=\"card-img-top\" src=\"" + this.image + "\" alt=\"Card image cap\">\n  \t\t<div class=\"card-body\">\n\t\t\t<h5 class=\"card-title\">" + this.model + "</h5>\n\t    \t<p class=\"card-text\">" + this.productionYear + "</p>\n\t    \t<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#aircraft" + this.index + "\">more info</button>\n  \t\t</div>\n\t\t</div>\n\n\t\t<!-- Modal -->\n\t\t<div class=\"modal fade\" id=\"aircraft" + this.index + "\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n\t\t  <div class=\"modal-dialog\" role=\"document\">\n\t\t    <div class=\"modal-content\">\n\t\t      <div class=\"modal-header\">\n\t\t        <h5 class=\"modal-title\" id=\"exampleModalLabel\">" + this.model + "</h5>\n\t\t        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t          <span aria-hidden=\"true\">&times;</span>\n\t\t        </button>\n\t\t      </div>\n\t\t      <div class=\"modal-body\">\n\t\t        <p>Production year: " + this.productionYear + "</p>\n\t\t        <p>Fuel: " + this.fuelType + "</p>\n\t\t        <p>Mileage: " + this.kmLeft + "</p>\n\t\t\t\t<p>Number of seats: " + this.numberSeats + "</p>\n\t\t\t\t<p>Type: " + this.type + "</p>\n\t\t        <p aircraftID=\"" + this.index + "\"></p>\n\t\t      </div>\n\t\t      <div class=\"modal-footer\">\n\t\t        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t        <button type=\"button\" index = \"" + this.index + "\" class=\"calculate btn btn-success\">Calculate Price</button>\n\t\t      </div>\n\t\t    </div>\n\t\t  </div>\n\t\t</div>\n\t\t";
    };
    return Aircraft;
}(Vehicle));
$("#aircraft").delegate(".calculate", "click", function () {
    var tmp = Number($(this).attr("index"));
    $("p[aircraftID='" + tmp + "']").text("Price: " + aircraftArray[tmp - 1].calcPrice() + " \u20AC");
});
/*new Aircraft("Cessna 172", 12000, 4, "Jet Fuel", 2008, "https://upload.wikimedia.org/wikipedia/commons/a/ae/Cessna_172S_Skyhawk_SP%2C_Private_JP6817606.jpg", "Double Engine");
new Aircraft("Eurofighter Airbus", 5700, 2, "Jet Fuel", 2018, "https://airbus-h.assetsadobe2.com/is/image/content/dam/channel-specific/website-/products-and-services/defence/eurofighter/eurofighter-typhoon-a-powerful-force-multiplier-1802.jpg?wid=1920&fit=fit,1&qlt=85,0","Jet");
new Aircraft("Mooney Ovation", 1000, 2, "Jet Fuel", 2017, "https://www.flyingmag.com/resizer/NvKkejqZTMO9QkhcsjUPmJ7OFC8=/760x512/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/7OABQHLBEL6PZ2YJXW7TA4NXDY.jpg", "Single Engine");
new Aircraft("Diamond Twin Star", 23000, 4, "Jet Fuel", 1991, "https://www.diamondaircraft.com/fileadmin/_processed_/3/5/csm_DA42-VI_Reserve-Auswahl-Bilder_Bild-_14__f4797babaa.jpg","Double Engine");*/
$("#cars").delegate(".calculate", "click", function () {
    var tmp = Number($(this).attr("index"));
    $("p[carID='" + tmp + "']").text("Price: " + carArray[tmp - 1].calcPrice() + " \u20AC");
});
new Automobile("Honda", 12000, 5, "Gas", 2008, "https://upload.wikimedia.org/wikipedia/commons/0/0d/2019_Honda_Civic_coupe_%28facelift%29%2C_front_12.16.19.jpg", true);
new Automobile("Suzuki", 5700, 4, "Gas", 2018, "https://www.suzuki.at/auto/offentliche-bilder/inhalte/angebote-modelle/swift-hybrid-2020/swift-hybrid-mandantenbanner/@@images/bb501c76-db86-451a-a79a-1f2b6068928b.jpeg", true);
new Automobile("Tesla", 1000, 5, "Electricity", 2017, "https://tesla-cdn.thron.com/delivery/public/image/tesla/35d15221-0a5f-4dce-b484-a4db67b81dd2/bvlatuR/std/0x0/model-s@2x", true);
new Automobile("Mercedes", 23000, 4, "Diesel", 1991, "https://i.pinimg.com/originals/2d/97/ba/2d97ba56023f3e8e3b6c6c8ee325bc50.jpg", false);
for (var j in aircraftArray) {
    document.getElementById("aircraft").innerHTML += aircraftArray[j].render();
}
/*for (var i = 0; i < aircraftArray.length; ++i) {
    document.getElementById("aircraft").innerHTML += aircraftArray[i].render();
}*/
for (var i in carArray) {
    document.getElementById("cars").innerHTML += carArray[i].render();
}
/*document.getElementById("aircraft").innerHTML += "test";*/ 
