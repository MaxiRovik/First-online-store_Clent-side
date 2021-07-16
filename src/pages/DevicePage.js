import React, {useState, useEffect, useContext} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from "../assets/BigStar.png";
import {useParams, useHistory} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";
import {Context} from "../index";
import {BASKET_ROUTE} from "../utils/consts"
import {addDeviceToServerBasket, getAll} from "../http/basketAPI";


const DevicePage = () => {

const [device, setDevice] = useState({info: []});
const {id} = useParams();
const {basket} = useContext(Context);
const history = useHistory();


useEffect(()=> {
    fetchOneDevice(id).then(data => { setDevice(data);
       })
}, []);

    return (
        <Container className = "mt-3">
            <Row>
                <Col md={4}>
                    <Image width = {300} height = {300} src = {process.env.REACT_APP_API_URL +device.img}>

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
                        <Button variant = {"outline-dark"}
                                onClick ={()=> {
                                    addDeviceToServerBasket(basket.basketId, id)
                                        .then (data => {
                                            console.log(data)
                                           if (data) {
                                               history.push(BASKET_ROUTE)}
                                               })

                                        }

                                   }
                        >
                            Add to basket
                        </Button>
                    </Card>
                </Col>
            </Row>
            <Row className = "d-flex flex-column m-3">
                <h1>Device Characteristics</h1>
                {device.info.map((info, index) =>
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