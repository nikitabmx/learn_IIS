var BmxBike = /** @class */ (function () {
    function BmxBike(brand) {
        this.brand = null;
        this.pegs = null;
        this.price = 0;
        this.brand = brand;
        return this;
    }
    BmxBike.prototype.setPegsCount = function (pegs) {
        this.pegs = pegs;
        return this;
    };
    BmxBike.prototype.build = function () {
        if (this.pegs > 5 || this.pegs === 0) {
            throw new Error('Pegs count is incorrect on BMX bike');
        }
        if (this.price <= 500) {
            throw new Error('Price is incorrect BMX bike');
        }
        return this;
    };
    return BmxBike;
}());
var MtbBike = /** @class */ (function () {
    function MtbBike(brand) {
        this.brand = null;
        this.pegs = null;
        this.brakes = null;
        this.price = 0;
        this.brand = brand;
        return this;
    }
    MtbBike.prototype.setPegsCount = function (pegs) {
        this.pegs = pegs;
        return this;
    };
    MtbBike.prototype.setBrakesCount = function (brakes) {
        this.brakes = brakes;
        return this;
    };
    MtbBike.prototype.build = function () {
        if (this.pegs >= 4 || this.pegs <= 1) {
            throw new Error('Pegs count is incorrect on MTB bike');
        }
        if (this.brakes < 2) {
            throw new Error('Brakes count is incorrect on MTB bike');
        }
        if (this.price <= 800) {
            throw new Error('Price is incorrect MTB bike');
        }
        return this;
    };
    return MtbBike;
}());
var BikeFactory = /** @class */ (function () {
    function BikeFactory() {
    }
    BikeFactory.prototype.create = function (brand, type) {
        if (type === void 0) { type = 'bmx'; }
        var AllowedBike = BikeFactory.bikesList[type] || BikeFactory.bikesList.downhill;
        var bike = new AllowedBike(brand);
        bike.setPrice = function (price) {
            this.price = price;
            return bike;
        };
        bike.setColor = function (color) {
            this.color = color;
            return bike;
        };
        bike.showBike = function () {
            var _a;
            var color = (_a = this.color) !== null && _a !== void 0 ? _a : 'Black';
            console.log(color + " " + this.brand + " " + type.toUpperCase() + " bike - " + this.price + "$");
            return bike;
        };
        return bike;
    };
    BikeFactory.bikesList = {
        bmx: BmxBike,
        mtb: MtbBike
    };
    return BikeFactory;
}());
var factory = new BikeFactory();
var bmx = factory.create('Haro', 'bmx')
    .setPegsCount(4)
    .setColor('Blue')
    .setPrice(700)
    .build();
var mtb = factory.create('GT', 'mtb')
    .setPegsCount(2)
    .setBrakesCount(2)
    .setColor('White')
    .setPrice(900)
    .build();
var tunningBikes = [
    bmx,
    mtb
];
tunningBikes.forEach(function (m) {
    m.showBike();
});
