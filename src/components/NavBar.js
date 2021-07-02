import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Context} from "../index";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite"

const NavBar =  observer(() => {
    const {user} = useContext(Context);
    console.log(user);
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:"orange"}} to={SHOP_ROUTE}>
                    ElectronicSpace
                </NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"}>For Admin</Button>
                        <Button variant={"outline-light"}
                                className = "ml-2" >Enter</Button>

                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"}
                                onClick = {()=> user.setIsAuth(true)}>Autorization</Button>
                    </Nav>
                }
            </Container>

        </Navbar>

    )
});

export default NavBar;