import React from 'react';
import {BrowserRouter, Switch} from "react-router-dom";
import {Provider } from 'react-redux';

import Header from "./components/Header";
import Navbar from "./components/Navbar";

import createStore from './redux/createStore';
import {GlobalStyle, SWrapper} from './styles';
import { Routes } from './routes';

const store = createStore({});

const App = () => {
    return (
        <Provider store={store}>
            <GlobalStyle />
            <BrowserRouter>
                <Header sitename="Infinity - web"/>
                <Navbar />
                <SWrapper>
                    <React.Suspense fallback={"Loading"}>
                        <Switch>
                            <Routes store={store} />
                        </Switch>
                    </React.Suspense>
                </SWrapper>
            </BrowserRouter>
        </Provider>
    )
}

export default App;
