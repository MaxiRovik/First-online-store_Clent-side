import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import { observer } from "mobx-react-lite"
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes,} from "../http/deviceAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const [itemsOnPage, changeItemsOnPage] = useState(5);
    const {device} = useContext(Context);

    device.setLimit(itemsOnPage);
    useEffect( () => {
        fetchTypes().then(data => device.setTypes(data));
        fetchBrands().then(data => device.setBrands(data));
        fetchDevices(null, null, itemsOnPage , 1).then(data => {
            device.setDevices(data.rows);
            device.setTotalCount(data.count);
        console.log(data)})
        }, []);

    useEffect(()=>{
        fetchDevices(device.selectedType.id, device.selectedBrand.id, itemsOnPage, device.page).then(data => {
            device.setDevices(data.rows);
            device.setTotalCount(data.count);
            device.setLimit(itemsOnPage);
        })
    }, [device.page, device.selectedType, device.selectedBrand, itemsOnPage]);

    let unVisible = {display: 'none'};
    let visibleButton = null;

    if (device.totalCount <= itemsOnPage) {

        visibleButton = unVisible
    }
        return (
            <Container>
                <Row className = "mt-3">
                    <Col md={3}>
                        <TypeBar/>
                    </Col>
                    <Col md={9}>
                        <BrandBar/>
                        <DeviceList/>
                        <Pages/>
                        <Container >
                            <Row>
                                <Col >
                                    <Button className = "mb-4" style = {visibleButton}
                                        variant="dark"
                                        onClick = {() => changeItemsOnPage(itemsOnPage + 1)}
                                        >
                                       More
                                    </Button>
                                </Col>
                                <Col >
                                    <Button   className = "mb-4"
                                        variant="dark"
                                        onClick = {() => changeItemsOnPage( itemsOnPage - 1)}
                                    >
                                        Less
                                    </Button>
                                </Col>
                            </Row>
                        </Container>

                    </Col>
                </Row>
            </Container>

        )
    }
);

export default Shop;