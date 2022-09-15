import { createContext, Dispatch } from 'react';
import { Action } from './HomeReducer';

export interface HomeContextType {
  place: string;
  isListView: boolean;
  currentZone: any;
}

export const initialState = {
  place: '잠원',
  isListView: false,
  currentZone: {
    image: '/images/kimbap.svg',
    title: '미니스톱 2호점',
    description: '차박하는 곳과 가까워요.',
    text: '잠원 한강공원\n 강바람 맞으며 \n김밥 콜?',
    address: '서울 강남구 압구정로11길 37-30',
    latlng: {
      lat: 37.5273430080676,
      lng: 127.01786902344813
    }
  }
};

export const HomeStateContext = createContext<HomeContextType>(initialState);

export const HomeDispatchContext = createContext<Dispatch<Action>>(() => null);
