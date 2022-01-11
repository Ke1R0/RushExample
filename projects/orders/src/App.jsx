import React, { Fragment, useMemo, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { createStore } from 'redux'
import Navbar from './components/Navbar';
import { SWrapper, SContent } from './styles';

const App = () => {
    const dispatch = useDispatch();
    const inputRef = useRef();
    const user = useSelector((state) => state?.user);
    const setUserName = useMemo(() => () => {
        dispatch({
            type: 'SET_USER_NAME',
            name: inputRef.current.value
        });
    }, [])
    return (
        <Router>
            <h1>Orders App</h1>
            {
                user?.isConnected ? (
                    <Fragment>
                        <h2>Logged in user: {user?.name}</h2>
                        <input type="text" ref={inputRef} />
                        <button onClick={setUserName}>Set User</button>
                    </Fragment>
                 ) : undefined
            }
            <SWrapper>
                <Navbar/>
                <SContent>
                    <Switch>
                        <Route exact path='/delivered/'>
                            <h2>Delivered Orders</h2>
                        </Route>
                        <Route exact path='/undelivered/'>
                            <h2>Undelivered Orders</h2>
                        </Route>
                        <Route exact path='/returns/'>
                            <h2>Returned Orders</h2>
                        </Route>
                        {/* This route is used if app is started without main app*/}
                        <Route exact path='/'>
                            <Redirect to="/delivered/"/>
                        </Route>
                    </Switch>
                </SContent>
            </SWrapper>
        </Router>
    );
};

const AppBootstrap = ({ store }) => {
    return (
      <Provider store={store || createStore(() => undefined)}>
        <App />
      </Provider>
    );
};

export default AppBootstrap;
