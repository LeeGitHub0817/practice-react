import { createStore, applyMiddleware, compose } from 'redux';

import reducer from './reducer';

/* 使用redux-saga时的配置 */
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga/sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE ?
  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(reducer, enhancer);
sagaMiddleware.run(mySaga);

/*
/*** 使用redux-thunk时的配置
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE ?
  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer, enhancer);
*/

/*
/*** 未使用redux-thunk和redux-saga时的配置
const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
*/

export default store;