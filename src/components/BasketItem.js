import React from 'react';

import {observer} from "mobx-react-lite"
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";


const BasketItem = observer(({device}) => {

    return(
        <Container style ={{width:"80%"}} className = "m-3 ">
            <Row>
                <Col md={3}>
                    <Image width = {120} height = {120} src = {process.env.REACT_APP_API_URL + device.img}>

                    </Image>
                </Col>
                <Col md={3}>
                    <div className =" align-items-center justify-content-center"
                         style = {{ fontSize:'16px'}}>
                        <h3  style = {{ fontSize:'16px'}} >Name and Description</h3>

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
                        <h3 className = 'w-50'>1000$</h3>

                    </Card>

                </Col>

                <Col md={2} className = "mt-lg-5">
                    <Button variant = "outline-danger">
                        Delete
                    </Button>
                </Col>
            </Row>

        </Container>
    );
});

export default BasketItem;