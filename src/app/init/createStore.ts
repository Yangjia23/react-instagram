import { configureStore, getDefaultMiddleware, Reducer } from '@reduxjs/toolkit'
import { createBrowserHistory, History } from 'history'
import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router'
import reduxThunk from 'redux-thunk'
import reducers from './reducers'

function createAppStore(history: History, preloadedState = {}) {
  const store = configureStore({
    reducer: {
      router: (connectRouter(history) as any) as Reducer<RouterState>,
      ...reducers,
    },
    middleware: [...getDefaultMiddleware(), routerMiddleware(history), reduxThunk],
    preloadedState,
  })
  return {
    store,
    history,
  }
}

export const { store, history } = createAppStore(createBrowserHistory())
export type RootState = ReturnType<typeof store.getState>
