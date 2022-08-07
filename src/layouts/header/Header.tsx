import React from 'react';
import * as Styles from './styles';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
const Header = () => {
  return (
    <Styles.Header>
      <Logo />
    </Styles.Header>
  );
};

export default Header;
