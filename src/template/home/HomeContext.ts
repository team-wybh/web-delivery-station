import { createContext, Dispatch } from 'react';
import { Action } from './HomeReducer';

export interface HomeContextType {
  place: string;
  isListView: boolean;
}

export const initialState = {
  place: '여의도',
  isListView: false
};

export const HomeStateContext = createContext<HomeContextType>(initialState);

export const HomeDispatchContext = createContext<Dispatch<Action>>(() => null);
