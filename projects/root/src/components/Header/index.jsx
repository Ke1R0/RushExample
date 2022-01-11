import React from 'react';
import Login from '../Login';
import { SWrapper, SRightWrapper, SLabel } from './styles';

const Header = ({ sitename }) => (
  <SWrapper>
    <div>
      <SLabel>{sitename}</SLabel>
    </div>
    <SRightWrapper>
      <Login />
    </SRightWrapper>
  </SWrapper>
);

export default Header;
