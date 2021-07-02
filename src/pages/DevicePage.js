import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from "../assets/BigStar.png"

const DevicePage = () => {
    const device =  {id: 1, name: 'note 10 pro', price: 25000, rating: 5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp2UhedlSGseG2nXT8Ou0EPEde0vEPPNcwog&usqp=CAU' }
    const description = [
        {id:1, title: 'RAM', description: '4Gb'},
        {id:2, title: 'Camera', description: '12Mpx'},
        {id:3, title: 'Processor', description: 'Cortex-A75'},
        {id:4, title: 'Number of cores', description: '4'},
        {id:5, title: 'Battery', description: '5000mAh'},
    ];

    return (
        <Container className = "mt-3">
            <Row>
                <Col md={4}>
                    <Image width = {300} height = {300} src = {device.img}>

                    </Image>
                </Col>
                <Col md={4}>
                    <Row className = "d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div className = "d-flex align-items-center justify-content-center "
                             style ={{background: `url(${bigStar}) no-repeat center center`,
                                 width:260, height:260, backgroundSize:'95%', fontSize:64}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card className ="d-flex flex-column  align-items-center justify-content-center"
                            style = {{width:300, height:300, fontSize:32, border: '3px solid lightgray'}}>
                        <h3>{device.price}</h3>
                        <Button variant = {"outline-dark"}>
                            Add to basket
                        </Button>
                    </Card>
                </Col>
            </Row>
            <Row className = "d-flex flex-column m-3">
                <h1>Specifications</h1>
                {description.map((info, index) =>
                    <Row key ={info.id}
                         style = {{background:index % 2 ===0 ? 'Lightgray' : 'transparent', padding:10 }}>
                             {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    )
};

export default DevicePage;