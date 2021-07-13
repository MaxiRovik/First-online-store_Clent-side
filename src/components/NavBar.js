import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Context} from "../index";
import {NavLink, useHistory} from "react-router-dom";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";



const NavBar =  observer(() => {
    const {user} = useContext(Context);
    const history = useHistory();

    const logout = () => {
        user.setUser({});
        user.setIsAuth(false)
    };

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:"orange"}} to={SHOP_ROUTE}>
                    ElectronicSpace
                </NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"}
                                onClick = {()=> history.push(ADMIN_ROUTE)} >
                            For Admin
                        </Button>
                        <Button variant={"outline-light"}
                                onClick = {()=> logout()}
                                className = "ml-2" >
                            Quit
                        </Button>
                        <Button  variant="light" className="ml-5"
                                style={{backgroundRepeat: "no-repeat" , backgroundColor: 'white',
                                    }}
                                onClick = {()=> history.push(BASKET_ROUTE)} >
                                My basket
                        </Button>

                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"}
                                onClick = {()=> history.push(LOGIN_ROUTE)}>Authorization</Button>
                    </Nav>
                }
            </Container>

        </Navbar>

    )
});

export default NavBar;