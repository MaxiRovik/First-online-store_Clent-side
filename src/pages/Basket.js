import React, { useEffect, useContext} from 'react';
import {Button} from "react-bootstrap";
import {Context} from "../index";
import BasketItem from "../components/BasketItem";
import {fetchOneDevice} from "../http/deviceAPI";
import { observer } from "mobx-react-lite"


const Basket = observer(() => {
    const {basket} = useContext(Context);

    const selectedDevicesId = basket.devicesId.map(selectedDevice => {
        return   selectedDevice.deviceId
    });

    useEffect(() => {
        selectedDevicesId.map(id => {
            return fetchOneDevice(id).then(data => {
                    basket.setDevicesInfo(data);
            })
        });
    }, []);

    return (
        <div style ={{marginLeft:"10%"}}>
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