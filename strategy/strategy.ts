class Bike {
    protected spokePrice: number // RUB
    getSpokePrice() {
        return this.spokePrice
    }
}

class Bmx extends Bike {
    constructor() {
        super()
        this.spokePrice = 4
    }
}

class Mtb extends Bike {
    constructor() {
        super()
        this.spokePrice = 6
    }
}

class SpokesCalculator {
    protected readonly spokesCount: number = 36; // RUB
    calc(bike: Bike): number {
        return bike.getSpokePrice() * this.spokesCount;
    }
}

const spokesCalculator = new SpokesCalculator()
const bmxSpokesPrice = spokesCalculator.calc(new Bmx()) + ' RUB';
const mtbSpokesPrice = spokesCalculator.calc(new Mtb()) + ' RUB';;

console.log({ bmxSpokesPrice, mtbSpokesPrice })

