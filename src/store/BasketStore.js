import {makeAutoObservable} from "mobx";

export default class BasketStore {
    constructor() {
        this._basketId = null;
        this._devicesId = [];
        this._devicesInfo = [];
        makeAutoObservable(this)
    }

    setBasketId(basketId) {
        this._basketId = basketId;
    }

    setDeviceId(devices) {
        this._devicesId  =  devices
    }

    setDevicesInfo(info) {
      this._devicesInfo = info
    }

    get devicesInfo() {
        return this._devicesInfo
    }

    get basketId() {
        return this._basketId;
    }
    get devicesId() {
        return this._devicesId

    }
}
