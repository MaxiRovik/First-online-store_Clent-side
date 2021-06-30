import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    construktor() {
       this._types = [
           {id: 1, name: 'TV'},
           {id: 2, name: 'phones'}
       ];
       this._brands = [
           {id: 1, name: 'samsung'},
           {id: 2, name: 'xiaomi'}
       ];
        this._devices = [
            {id: 1, name: 'note 10 pro', price: 25000, rating: 5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp2UhedlSGseG2nXT8Ou0EPEde0vEPPNcwog&usqp=CAU' },
            {id: 2, name: 'note 10 pro', price: 25000, rating: 5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp2UhedlSGseG2nXT8Ou0EPEde0vEPPNcwog&usqp=CAU' },
            {id: 3, name: 'note 10 pro', price: 25000, rating: 5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp2UhedlSGseG2nXT8Ou0EPEde0vEPPNcwog&usqp=CAU' },
            {id: 4, name: 'note 10 pro', price: 25000, rating: 5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp2UhedlSGseG2nXT8Ou0EPEde0vEPPNcwog&usqp=CAU' },
            {id: 5, name: 'note 10 pro', price: 25000, rating: 5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp2UhedlSGseG2nXT8Ou0EPEde0vEPPNcwog&usqp=CAU' },
            {id: 6, name: 'note 10 pro', price: 25000, rating: 5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp2UhedlSGseG2nXT8Ou0EPEde0vEPPNcwog&usqp=CAU' },

        ];
        makeAutoObservable(this)
    }
    setTypes(types) {
        this._types = types;
    }
    setBrands(brands) {
        this._brands =brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}
