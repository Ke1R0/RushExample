import React from 'react';
import { useSelector } from 'react-redux';
import { SLink, SWrapper } from './styles';

const Navbar = () => {
  const user = useSelector((state) => state?.user);
  return (
    <SWrapper>
      <SLink exact={true} activeClassName='is-active' to='/'>
        Home
      </SLink>
      <SLink activeClassName='is-active' to='/orders/' replace>
        Orders
      </SLink>
      {user?.isConnected && (
        <>
          <SLink activeClassName='is-active' to='/delivery/'>
            Delivery
          </SLink>
        </>
      )}
    </SWrapper>
  );
};

export default Navbar;
