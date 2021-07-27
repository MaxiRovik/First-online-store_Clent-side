import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';

import {observer} from "mobx-react-lite"
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {DEVICE_ROUTE} from "../utils/consts";
import {deleteDevice} from "../http/basketAPI";
import {Context} from "../index";






const BasketItem = observer(({device}) => {
    const {basket} = useContext(Context);
    const history = useHistory();
    return(
        <Container style ={{width:"80%", marginBottom: "10px",cursor: 'pointer' }}
                   className = "m-5 ">
            <Row >
                <Col md={3}
                     onClick = {() => history.push(DEVICE_ROUTE + '/' + device.id)}>
                    <Image width = {120} height = {120} src = {process.env.REACT_APP_API_URL + device.img}>

                    </Image>
                </Col>
                <Col md={3}>
                    <div className =" align-items-center justify-content-center"
                         style = {{ fontSize:'16px'}}>
                        <h3  style = {{ fontSize:'16px'}} >{device.name}</h3>

                    </div>

                </Col>
                <Col md={2}>
                    <Row className = "d-flex flex-column align-items-center">
                        <h2 style = {{ fontSize:'16px'}}>quantity of goods</h2>
                        <div className = "d-flex align-items-center justify-content-center ">
                            <Button>-</Button>
                            <div className = "p-lg-3 font-weight-bold" style = {{width: "50px", fontSize:"24px"}}>2</div>
                            <Button>+</Button>

                        </div>
                    </Row>
                </Col>
                <Col md={2}>
                    <Card className =" align-items-center justify-content-center"
                          style = {{width:'150px', height:'100px', fontSize:'16px'}}>
                        <h3 className = 'w-80'>{device.price} $</h3>

                    </Card>

                </Col>

                <Col md={2} className = "mt-lg-5">
                    <Button  variant = "outline-danger"
                             onClick ={() => {
                                 console.log(device.id)
                                 deleteDevice(device.id ).then(data => {
                                     console.log(data)
                                 })
                                }}
                    >
                        Delete
                    </Button>
                </Col>
            </Row>

        </Container>
    );
});

export default BasketItem;