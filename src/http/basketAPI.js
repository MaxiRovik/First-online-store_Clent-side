import {$host, $authHost} from "./Index";

export const createBasket = async(userId) => {
    const {data} = await $host.post('api/basket', userId);

    return data
};

export const addDeviceToServerBasket = async(id) => {
    const {data} = await $host.post('api/basket/' +id, id);

    return data
};

export const getAll = async() => {
    const {data} = await $host.get('api/basket', );
    localStorage.setItem('deviceInBasket', data);
    return data
};