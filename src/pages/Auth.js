import React,{useState, useContext} from 'react';
import { observer } from "mobx-react-lite"
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation, useHistory} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {Context} from "../index";


const Auth = observer(() => {
    const {user} = useContext(Context);
    const location = useLocation();
    const history = useHistory();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async() => {
        try {
            let userData;
            if (isLogin) {
                userData = await login(email, password)

            } else {
                userData = await registration(email, password);

            }
            user.setUser(userData);
            user.setIsAuth(true);
            history.push(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }


    };
    return (
       <Container className = "d-flex justify-content-center align-items-center"
       style = {{height: window.innerHeight-54}}
       >
           <Card style = {{width:600}} className = "p-5">
               <h2 className = "m-auto"> {isLogin ? "Authorization"
               : "Registration"}</h2>
               <Form className = "d-flex flex-column">
                   <Form.Control
                       className = "mt-3"
                       placeholder = "Enter your email"
                       value = {email}
                       onChange = {e => setEmail(e.target.value)}
                   />
                   <Form.Control
                       className = "mt-3"
                       placeholder = "Enter your password"
                       value = {password}
                       onChange = {e => setPassword(e.target.value)}
                       type = 'password'
                   />
                   <Row className = "d-flex justify-content-between mt-4 pl-4 pr-4">
                       {isLogin ?
                           <div>
                               don't have an account? <NavLink to={REGISTRATION_ROUTE}>
                               registration
                           </NavLink>
                           </div>
                           :
                           <div>
                               Do you have an account? <NavLink to={LOGIN_ROUTE}>
                               Enter
                           </NavLink>
                           </div>
                       }
                       <Button  variant = {"outline-success"}
                                onClick={click}
                       >
                           {isLogin ? "Enter" : "Registration"}
                       </Button>
                   </Row>


               </Form>
           </Card>

       </Container>
    )
});

export default Auth;