import React, { useReducer } from 'react';
import { HomeDispatchContext, HomeStateContext, initialState } from './HomeContext';
import { reducer } from './HomeReducer';


interface HomeProviderProps {
  children: React.ReactNode;
}

function HomeProvider({ children }: HomeProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <HomeDispatchContext.Provider value={dispatch}>
      <HomeStateContext.Provider value={state}>
        {children}
      </HomeStateContext.Provider>
    </HomeDispatchContext.Provider>

  );
}

export default HomeProvider;
