import { HomeContextType } from './HomeContext';

export const SET_PLACE = 'SET_PLACE';
export const SET_IS_LIST_VIEW = 'SET_IS_LIST_VIEW';
export const SET_ZONE = 'SET_ZONE';

export type Action =
  | { type: 'SET_PLACE'; place: string, }
  | { type: 'SET_IS_LIST_VIEW'; isListView: boolean }
  | { type: 'SET_ZONE'; currentZone: any }


export const reducer = (state: HomeContextType, action: Action) => {
  switch (action.type) {
    case SET_PLACE:
      return {
        ...state,
        place: action.place
      };
    case SET_IS_LIST_VIEW:
      return {
        ...state,
        isListView: action.isListView
      };
    case SET_ZONE:
      return {
        ...state,
        currentZone: action.currentZone
      };
    default:
      return state;
  }
};
