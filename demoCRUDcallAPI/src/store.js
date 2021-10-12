import {createStore,applyMiddleware} from 'redux'
import createSagaMiddleWare from'redux-saga'
import logger from 'redux-logger'
import rootReducer from './reducers/index'
import rootSaga from './sagas';
//root reducer
// saga file
const sagaMiddleware = createSagaMiddleWare();
const middlewares = [logger, sagaMiddleware];
export const store = createStore(rootReducer,applyMiddleware(...middlewares))
sagaMiddleware.run(rootSaga);
export default store;