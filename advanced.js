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
    function Vehicle(m, km, seats, fuel, year) {
        this.model = m;
        this.kmLeft = km;
        this.numberSeats = seats;
        this.fuelType = fuel;
        this.productionYear = year;
    }
    Vehicle.prototype.calcPrice = function () {
        this.price = Math.floor(10000 / this.productionYear * this.numberSeats + this.kmLeft);
        return this.price;
    };
    return Vehicle;
}());
var Motorbike = /** @class */ (function (_super) {
    __extends(Motorbike, _super);
    function Motorbike(m, km, seats, fuel, year, cc) {
        var _this = _super.call(this, m, km, seats, fuel, year) || this;
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
    function Truck(m, km, seats, fuel, year, heigth) {
        var _this = _super.call(this, m, km, seats, fuel, year) || this;
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
    function Automobile(m, km, seats, fuel, year, ac) {
        var _this = _super.call(this, m, km, seats, fuel, year) || this;
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
    function Aircraft(m, km, seats, fuel, year, type) {
        var _this = _super.call(this, m, km, seats, fuel, year) || this;
        _this.type = type;
        return _this;
    }
    Aircraft.prototype.calcPrice = function () {
        return _super.prototype.calcPrice.call(this);
    };
    return Aircraft;
}(Vehicle));
var bike = new Motorbike("Norton", 37000, 2, "gas", 1950, 125);
console.log(bike.calcPrice());
