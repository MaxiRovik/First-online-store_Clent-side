import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
       this._types = [
           {id: 1, name: 'TV'},
           {id: 2, name: 'Phones'},
           {id: 3, name: 'Monitors'},
           {id: 4, name: 'Fridge'},
       ];
       this._brands = [
           {id: 1, name: 'Samsung'},
           {id: 2, name: 'Xiaomi'},
           {id: 3, name: 'LG'},
           {id: 4, name: 'Motorolla'},
           {id: 5, name: 'Nokia'},

       ];
        this._devices = [
            {id: 1, name: 'note 10 pro', price: 25000, rating: 5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp2UhedlSGseG2nXT8Ou0EPEde0vEPPNcwog&usqp=CAU' },
            {id: 2, name: 'note 10 pro', price: 25000, rating: 5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp2UhedlSGseG2nXT8Ou0EPEde0vEPPNcwog&usqp=CAU' },
            {id: 3, name: 'note 10 pro', price: 25000, rating: 5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp2UhedlSGseG2nXT8Ou0EPEde0vEPPNcwog&usqp=CAU' },
            {id: 4, name: 'note 10 pro', price: 25000, rating: 5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp2UhedlSGseG2nXT8Ou0EPEde0vEPPNcwog&usqp=CAU' },
            {id: 5, name: 'note 10 pro', price: 25000, rating: 5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp2UhedlSGseG2nXT8Ou0EPEde0vEPPNcwog&usqp=CAU' },
            {id: 6, name: 'note 10 pro', price: 25000, rating: 5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp2UhedlSGseG2nXT8Ou0EPEde0vEPPNcwog&usqp=CAU' },
            {id: 7, name: 'note 10 pro', price: 25000, rating: 5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp2UhedlSGseG2nXT8Ou0EPEde0vEPPNcwog&usqp=CAU' },
            {id: 8, name: 'note 10 pro', price: 25000, rating: 5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp2UhedlSGseG2nXT8Ou0EPEde0vEPPNcwog&usqp=CAU' },
            {id: 9, name: 'note 10 pro', price: 25000, rating: 5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp2UhedlSGseG2nXT8Ou0EPEde0vEPPNcwog&usqp=CAU' },

        ];

        this._selectedType = {};
        this._selectedBrand = {};

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

    setSelectedType(type) {
        this._selectedType  = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand  = brand
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
    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}
