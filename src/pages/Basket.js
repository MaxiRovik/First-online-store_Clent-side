import React, {useState, useEffect, useContext} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {Context} from "../index";
import BasketItem from "../components/BasketItem";


const Basket = () => {
    const {basket} = useContext(Context);

    return (
        <div style ={{marginLeft:"10%"}}>
            <div>
                {basket.devicesInBasket.map(device =>

               <BasketItem key = {device.id} device = {device}/>
                    )}
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
};

export default Basket;