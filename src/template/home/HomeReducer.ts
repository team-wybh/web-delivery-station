import { HomeContextType } from './HomeContext';

export const SET_PLACE = 'SET_PLACE';
export const SET_IS_LIST_VIEW = 'SET_IS_LIST_VIEW';

export type Action =
  | { type: 'SET_PLACE'; place: string, }
  | { type: 'SET_IS_LIST_VIEW'; isListView: boolean }


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
    default:
      return state;
  }
};
