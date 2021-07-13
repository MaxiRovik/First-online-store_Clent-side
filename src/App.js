import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";
import {createBasket} from "./http/basketAPI";


const App = observer(() => {
    const {user, basket} = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(  ()=>{
            check().then(data => {
                    user.setUser(data);
                    user.setIsAuth(true);
                    console.log(data);
                    console.log(user.user.id)})
                .then (()=> createBasket({userId:user.user.id}))
                .then (data => {
                    console.log(data.id);
                    basket.setBasketId(data.id)
                }).finally(() => setLoading(false))

            }, []);

    console.log(basket.basketId + '  это уже из стора')
    if (loading) {
        return <Spinner  animation = "border"/>
    }
    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    );
});

export default App;
