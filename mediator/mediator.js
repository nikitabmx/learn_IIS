var BitcoinHolder = /** @class */ (function () {
    function BitcoinHolder(name) {
        this.name = name;
        this.room = null;
    }
    BitcoinHolder.prototype.send = function (message, to) {
        this.room.send(message, this, to);
    };
    BitcoinHolder.prototype.receive = function (message, from) {
        console.log(from.name + " => " + this.name + ": " + message);
    };
    return BitcoinHolder;
}());
var Zavod = /** @class */ (function () {
    function Zavod() {
        this.bitcoinHolders = {};
    }
    Zavod.prototype.register = function (bitcoinHolder) {
        this.bitcoinHolders[bitcoinHolder.name] = BitcoinHolder;
        bitcoinHolder.room = this;
    };
    Zavod.prototype.send = function (message, from, to) {
        var _this = this;
        if (to) {
            to.receive(message, from);
        }
        else {
            Object.keys(this.bitcoinHolders).forEach(function (key) {
                if (_this.bitcoinHolders[key] !== from) {
                    _this.bitcoinHolders[key].receive(message, from);
                }
            });
        }
    };
    return Zavod;
}());
var gleb = new BitcoinHolder('Gleb');
var artem = new BitcoinHolder('Artem');
var dima = new BitcoinHolder('Dima');
var zavod = new Zavod();
zavod.register(gleb);
zavod.register(artem);
zavod.register(dima);
gleb.send('Я купил биток по 35к! Скоро на завод!', gleb);
dima.send('Я купил биток по 35к! Скоро на завод!', dima);
artem.send('А я купил биток по 40к и иду на завод!', artem);
