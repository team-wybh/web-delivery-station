import React from 'react';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { ReactComponent as List } from 'assets/icons/ico_list_24.svg';
import * as Styles from './styles';

function Header() {
  return (
    <Styles.Header>
      <Logo />
      <Styles.Button> <List /></Styles.Button>
    </Styles.Header>
  );
}

export default Header;
