import React, { useContext } from 'react';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { ReactComponent as List } from 'assets/icons/ico_list_24.svg';
import { ReactComponent as Card } from 'assets/icons/ico_card_24.svg';
import * as Styles from './styles';
import { HomeDispatchContext, HomeStateContext } from '../../template/home/HomeContext';
import { SET_IS_LIST_VIEW } from '../../template/home/HomeReducer';

function Header() {
  const { isListView } = useContext(HomeStateContext);
  const dispatch = useContext(HomeDispatchContext);

  const handleButtonClick = () => {
    dispatch({ type: SET_IS_LIST_VIEW, isListView: !isListView });
  };
  return (
    <Styles.Header>
      <Logo />
      <Styles.Button onClick={handleButtonClick}>{isListView ? <Card /> : <List />}</Styles.Button>
    </Styles.Header>
  );
}

export default Header;
