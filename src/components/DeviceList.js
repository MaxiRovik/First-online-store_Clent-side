import React, {useContext}from 'react';
import {Context} from "../index";
import {Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem";
import {observer} from "mobx-react-lite"

const DeviceList  = observer(() => {
    const {device} = useContext(Context);
    const brands = device.brands

    return (
        <Row className = "d-flex">
            {device.devices.map(device =>
            <DeviceItem key = {device.id} device={device} brandId = {device.brandId} brands={brands} />
            )}
        </Row>
    )
});

export default DeviceList;
