import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import saga from '../sagas/saga';
import history from './history';

const dev = (process.env.NODE_ENV === 'development');
const sagaMiddleware = createSagaMiddleware();
const router = routerMiddleware(history);

const middlewares = [];

if (dev) {
    const logger = createLogger({});
    middlewares.push(logger);
}

middlewares.push(sagaMiddleware);
middlewares.push(thunk);
middlewares.push(router);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = composeEnhancers(applyMiddleware(...middlewares))(createStore)(reducer);
export default store;
sagaMiddleware.run(saga);
