const BIKES_LIST = [
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
]

class BikesDB {
  public list: any[] = BIKES_LIST;
}

class RequestBikesList_OLD {
  public bikesDB = new BikesDB();
  fetch(bikeType: string) {
    switch (bikeType) {
      case 'BMX': return this.bikesDB.list.filter((b) => b.type === bikeType);
      case 'MTB': return this.bikesDB.list.filter((b) => b.type === bikeType);
      default: return this.bikesDB.list;
    }
  }
}

class RequestBikesList_NEW {
  public bikesDB = new BikesDB();

  convertData(bikeType: string): any[] {
    return this.bikesDB.list
      .filter((b) => b.type === bikeType)
      .map((b) => ({
        title: `${b.type} - ${b.name} ${b.price}`,
        ...b
      }));
  }

  fetchBmx() {
    return this.convertData('BMX');
  }

  fetchMtb() {
    return this.convertData('MTB');
  }

  fetchAll() {
    return this.bikesDB;
  }

}

class RequestBikesListAdapter {
  bikesList: any
  constructor() {
    this.bikesList = new RequestBikesList_NEW()
  }

  fetch(bikeType: string) {
    switch (bikeType) {
      case 'BMX': return this.bikesList.fetchBmx()
      case 'MTB': return this.bikesList.fetchMtb()
      default: return this.bikesList.fetchAll()
    }
  }
}

const oldRequest = new RequestBikesList_OLD()
console.log('OLD request BMX: ', oldRequest.fetch('BMX'))

const newRequest = new RequestBikesList_NEW()
console.log('NEW request BMX: ', newRequest.fetchBmx())

const adapter = new RequestBikesListAdapter()
console.log('adapter: ', adapter.fetch('BMX'))
