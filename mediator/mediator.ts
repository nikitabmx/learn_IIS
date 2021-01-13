class BitcoinHolder {
    zavod: any
    name: string
    constructor(name: string) {
        this.name = name
        this.zavod = null
    }

    send(message: string, to: any) {
        this.zavod.send(message, this, to)
    }

    receive(message: string, from: any) {
        console.log(`${from.name} => ${this.name}: ${message}`)
    }
}

class Zavod {
    bitcoinHolders: {}
    constructor() {
        this.bitcoinHolders = {}
    }

    register(bitcoinHolder: any) {
        this.bitcoinHolders[bitcoinHolder.name] = BitcoinHolder
        bitcoinHolder.zavod = this
    }

    send(message: string, from: any, to: any) {
        if (to) {
            to.receive(message, from)
        } else {
            Object.keys(this.bitcoinHolders).forEach(key => {
                if (this.bitcoinHolders[key] !== from) {
                    this.bitcoinHolders[key].receive(message, from)
                }
            })
        }
    }
}

const gleb = new BitcoinHolder('Gleb')
const artem = new BitcoinHolder('Artem')
const dima = new BitcoinHolder('Dima')

const zavod = new Zavod()

zavod.register(gleb)
zavod.register(artem)
zavod.register(dima)

gleb.send('Я купил биток по 25к! А ты на завод!', artem)
dima.send('Я купил биток по 25к! А ты скоро на завод!', artem)
artem.send('Я купил биток по 40к и иду на завод!', dima)