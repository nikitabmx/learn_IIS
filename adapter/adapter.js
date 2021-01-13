var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var BIKES_LIST = [
    {
        type: 'BMX',
        name: 'Haro',
        price: '20 000 RUB'
    },
    {
        type: 'MTB',
        name: 'Merrida',
        price: '60 000 RUB'
    },
    {
        type: 'MTB',
        name: 'GT',
        price: '15 000 RUB'
    },
    {
        type: 'BMX',
        name: 'Sunday',
        price: '30 000 RUB'
    },
    {
        type: 'MTB',
        name: 'Specialized',
        price: '180 000 RUB'
    }
];
var BikesListDB = /** @class */ (function () {
    function BikesListDB() {
        this.list = BIKES_LIST;
    }
    return BikesListDB;
}());
var RequestBikeList_OLD = /** @class */ (function () {
    function RequestBikeList_OLD() {
        this.bikesDB = new BikesListDB();
    }
    RequestBikeList_OLD.prototype.fetch = function (bikeType) {
        switch (bikeType) {
            case 'BMX': return this.bikesDB.list.filter(function (b) { return b.type === bikeType; });
            case 'MTB': return this.bikesDB.list.filter(function (b) { return b.type === bikeType; });
            default: return this.bikesDB.list;
        }
    };
    return RequestBikeList_OLD;
}());
var RequestBikeList_NEW = /** @class */ (function () {
    function RequestBikeList_NEW() {
        this.bikesDB = new BikesListDB();
    }
    RequestBikeList_NEW.prototype.convertData = function (bikeType) {
        return this.bikesDB.list
            .filter(function (b) { return b.type === bikeType; })
            .map(function (b) { return (__assign({ title: b.type + " - " + b.name + " " + b.price }, b)); });
    };
    RequestBikeList_NEW.prototype.fetchBmx = function () {
        return this.convertData('BMX');
    };
    RequestBikeList_NEW.prototype.fetchMtb = function () {
        return this.convertData('MTB');
    };
    RequestBikeList_NEW.prototype.fetchAll = function () {
        return this.bikesDB;
    };
    return RequestBikeList_NEW;
}());
var RequestBikesListAdapter = /** @class */ (function () {
    function RequestBikesListAdapter() {
        this.bikeList = new RequestBikeList_NEW();
    }
    RequestBikesListAdapter.prototype.fetch = function (bikeType) {
        switch (bikeType) {
            case 'BMX': return this.bikeList.fetchBmx();
            case 'MTB': return this.bikeList.fetchMtb();
            default: return this.bikeList.fetchAll();
        }
    };
    return RequestBikesListAdapter;
}());
var oldRequest = new RequestBikeList_OLD();
console.log('OLD request BMX: ', oldRequest.fetch('BMX'));
var newRequest = new RequestBikeList_NEW();
console.log('NEW request BMX: ', newRequest.fetchBmx());
var adapter = new RequestBikesListAdapter();
console.log('adapter: ', adapter.fetch('BMX'));
