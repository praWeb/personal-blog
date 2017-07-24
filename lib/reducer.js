import { combineReducers } from 'redux'

export default function getReducer (client) {
  return combineReducers({
    apollo: clinet.reducer()
  })
}
