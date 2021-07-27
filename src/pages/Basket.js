import React, { useEffect, useContext, useState} from 'react';
import {Button} from "react-bootstrap";
import {Context} from "../index";
import BasketItem from "../components/BasketItem";
import {fetchOneDevice} from "../http/deviceAPI";
import { observer } from "mobx-react-lite"
import {getAll} from "../http/basketAPI";


const Basket = observer( () => {
    const {basket} = useContext(Context);

    const getItemInfo = () => {
    let arr =[];
    basket.devicesId.forEach(id => {

        fetchOneDevice( id.deviceId).then(data => {
            console.log(data)
            arr.push(data);
            basket.setDevicesInfo(arr);
        });
    });
};

    useEffect(() => {
        getAll().then(response => {
            basket.setDeviceId(response)
        }).then(() => getItemInfo())
        }, []);


    return (
        <div style ={{marginLeft:"10%",  marginBottom: "20px"}}>
            <div>
                {basket.devicesInfo.map((item, i) => {
                        return <BasketItem key = {i} device = {item}/>
                })
                    }
            </div>

            <hr/>
            <div style ={{marginLeft:"40%", marginRight:"40%"}}
                 className = "d-flex justify-content-between">
                <div>
                    Sum
                </div>
                <div>
                    <Button variant="outline-success"> Place your order</Button>
                </div>
            </div>
        </div>

    )
});

export default Basket;