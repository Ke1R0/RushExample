import React from 'react';
import {SLink, SWrapper} from './styles';

const Navbar = ({increaseCount}) => (
    <SWrapper onClick={increaseCount}>
        <SLink exact={true} activeClassName='is-active' to='/delivered/'>Delivered</SLink>
        <SLink activeClassName='is-active' to='/undelivered/'>Undelivered</SLink>
        <SLink activeClassName='is-active' to='/returns/'>Returns</SLink>
    </SWrapper>
);

export default Navbar;
