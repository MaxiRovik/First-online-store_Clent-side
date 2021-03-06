import React, {useEffect} from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/rating_star.png';
import {useHistory} from 'react-router-dom';
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device, brandId, brands}) => {
    const history = useHistory();

    return (
        <Col md={3} className = "mt-3 p-2" onClick = {() => history.push(DEVICE_ROUTE + '/' + device.id)} >
            <Card style = {{width: 150, cursor: 'pointer', }} border = {'light'}>
                <Image width={150} height = {150} src = {process.env.REACT_APP_API_URL + device.img}/>
                <div className = "text-black-50 mt-2 d-flex justify-content-between align-items-center">
                    <div>
                        {brands.map(brand => brand.id === brandId ?
                            <div key ={brandId} >{brand.name} </div>
                        : '')}

                    </div>
                    <div className = "d-flex align-items-center">
                        {device.rating}
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
                <div>
                    {device.name}
                </div>
            </Card>
        </Col>
    )
};

export default DeviceItem;