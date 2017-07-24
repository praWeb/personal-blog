import { applyMiddleware, compose } from 'redux'

export default function createMiddleware (clientMiddleware) {
  const middleware = applyMiddleware(clientMiddleware)
  if(process.borwser && window.devToolsExtenson){
    return compose(middleware, window.devToolsExtenson())
  }
  return middleware
}
