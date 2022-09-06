import React, { useContext } from 'react';
import { HomeStateContext } from '../../template/home/HomeContext';
import * as Styles from './styles';

function MapTitle() {
  const { place } = useContext(HomeStateContext);
  return (
    <Styles.Title>{place} 한강공원</Styles.Title>
  );
}

export default MapTitle;
