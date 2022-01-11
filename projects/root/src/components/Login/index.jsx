import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserIsConnected } from '../../redux/actions/user';
import { SLabel } from './styles';

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user);

  return (
    <>
      {!user?.isConnected && (
        <button
          type='button'
          onClick={() => dispatch(setUserIsConnected(true))}
        >
          Login
        </button>
      )}
      {user?.isConnected && (
        <>
          <SLabel>{user?.name}</SLabel>
          <button
            type='button'
            onClick={() => dispatch(setUserIsConnected(false))}
          >
            Sign out
          </button>
        </>
      )}
    </>
  );
};

export default Login;
