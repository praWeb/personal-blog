import { createStore } from 'redux'
import getReducer from './reducer'
import createMiddleware from './middleware'

let reduxStore = null

export const initStore = (client, initialStore) => {
  let store
  if(!process.browser || !reduxStore) {
    const middleware = createMiddleware(client.middleware())
    store = createStore(getReducer(client), intialState, middleware)
    if(!process.browser) {
      return store
    }
    reduxStore = store
  }
  return reduxStore
}
