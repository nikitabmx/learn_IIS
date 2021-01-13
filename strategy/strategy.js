var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bike = /** @class */ (function () {
    function Bike() {
    }
    Bike.prototype.getSpokePrice = function () {
        return this.spokePrice;
    };
    return Bike;
}());
var Bmx = /** @class */ (function (_super) {
    __extends(Bmx, _super);
    function Bmx() {
        var _this = _super.call(this) || this;
        _this.spokePrice = 4;
        return _this;
    }
    return Bmx;
}(Bike));
var Mtb = /** @class */ (function (_super) {
    __extends(Mtb, _super);
    function Mtb() {
        var _this = _super.call(this) || this;
        _this.spokePrice = 6;
        return _this;
    }
    return Mtb;
}(Bike));
var SpokesCalculator = /** @class */ (function () {
    function SpokesCalculator() {
        this.spokesCount = 36; // RUB
    }
    SpokesCalculator.prototype.calc = function (bike) {
        return bike.getSpokePrice() * this.spokesCount;
    };
    return SpokesCalculator;
}());
var spokesCalculator = new SpokesCalculator();
var bmxSpokesPrice = spokesCalculator.calc(new Bmx()) + ' RUB';
var mtbSpokesPrice = spokesCalculator.calc(new Mtb()) + ' RUB';
;
console.log({ bmxSpokesPrice: bmxSpokesPrice, mtbSpokesPrice: mtbSpokesPrice });
