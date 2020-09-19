/**
 * This example was taken from repo by url: 
 * 'https://github.com/vercel/next.js/tree/canary/examples/with-redux-thunk'
 */

import { useMemo } from 'react';
import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from './reducers/rootReducer';

let store: Store | null;

function initStore(initialState): Store {
  
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}

export const initializeStore = (preloadedState): Store => {
  let _store: Store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = null;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState): Store {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}