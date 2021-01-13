class BmxBike {
    public brand: string = null;
    public pegs: number = null;
    public price: number = 0;

    private constructor(brand: string) {
        this.brand = brand;
        return this;
    }

    public setPegsCount(pegs: number) {
        this.pegs = pegs;
        return this;
    }

    public build() {
        if (this.pegs > 5 || this.pegs === 0) {
            throw new Error('Pegs count is incorrect on BMX bike')
        }
        if (this.price <= 500) {
            throw new Error('Price is incorrect BMX bike')
        }
        return this;
    }
}

class MtbBike {
    public brand: string = null;
    public pegs: number = null;
    public brakes: number = null;
    public price: number = 0;

    private constructor(brand: string) {
        this.brand = brand;
        return this;
    }

    public setPegsCount(pegs: number) {
        this.pegs = pegs;
        return this;
    }

    public setBrakesCount(brakes: number) {
        this.brakes = brakes;
        return this;
    }

    public build() {
        if (this.pegs >= 4 || this.pegs <= 1) {
            throw new Error('Pegs count is incorrect on MTB bike')
        }
        if (this.brakes < 2) {
            throw new Error('Brakes count is incorrect on MTB bike')
        }
        if (this.price <= 800) {
            throw new Error('Price is incorrect MTB bike')
        }
        return this;
    }
}

class BikeFactory {
    public static bikesList: any = {
        bmx: BmxBike,
        mtb: MtbBike
    }

    public create(brand: string, type = 'bmx') {
        const AllowedBike = BikeFactory.bikesList[type] || BikeFactory.bikesList.downhill
        const bike = new AllowedBike(brand)

        bike.setPrice = function (price: number) {
            this.price = price;
            return bike;
        }

        bike.setColor = function (color: string) {
            this.color = color;
            return bike
        }

        bike.showBike = function () {
            const color = this.color ?? 'Black'
            console.log(`${color} ${this.brand} ${type.toUpperCase()} bike - ${this.price}$`);
            return bike
        }

        return bike
    }

}

const factory = new BikeFactory();

const bmx = factory.create('Haro', 'bmx')
    .setPegsCount(4)
    .setColor('Blue')
    .setPrice(700)
    .build();

const mtb = factory.create('GT', 'mtb')
    .setPegsCount(2)
    .setBrakesCount(2)
    .setColor('White')
    .setPrice(900)
    .build();

const tunningBikes = [
    bmx,
    mtb
]

tunningBikes.forEach((m) => {
    m.showBike()
})