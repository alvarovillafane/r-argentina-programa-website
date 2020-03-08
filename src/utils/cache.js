import React, { useReducer, createContext } from 'react';

export const CacheContext = createContext();
CacheContext.displayName = 'Cache'

export const SET_CACHE = 'SET_CACHE';
const cacheReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CACHE:
      return {
        ...state,
        [payload.key]: payload.value,
      };
    default:
      return state;
  }
};

export function CacheProvider({ children }) {
  const [state, dispatch] = useReducer(cacheReducer, {
    javascript: null,
    react: null,
  });

  return <CacheContext.Provider value={{ state, dispatch }}>{children}</CacheContext.Provider>;
}
