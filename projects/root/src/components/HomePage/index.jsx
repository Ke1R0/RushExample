import React, { useMemo, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {SContent} from './styles';


const HomePage = () => {
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
        <SContent>
            <h1>Root App Home Page</h1>
            <h2>Logged in user: {user?.name}</h2>
            <input type="text" ref={inputRef} />
            <button onClick={setUserName}>Set User</button>
        </SContent>
    );
};

export default HomePage;