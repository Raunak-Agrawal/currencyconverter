import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import rootSaga from './sagas';

const middleware = [];

const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);
export default store;
