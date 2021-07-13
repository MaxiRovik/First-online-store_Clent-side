import {makeAutoObservable} from "mobx";

export default class BasketStore {
    constructor() {
        this._basketId = null;
        this._devicesInBasket = [];
        makeAutoObservable(this)
    }

    setBasketId(basketId) {
        this._basketId = basketId;
    }

    setDeviceInBasket(devices) {
        this._devicesInBasket  =  devices
    }

    get basketId() {
        return this._basketId;
    }
    get devicesInBasket() {
        return this._devicesInBasket

    }
}
