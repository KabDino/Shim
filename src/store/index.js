import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import user from './user';
import RF from 'redux-flipper';

export default function configureStore() {
  const reducers = combineReducers({
    user,
  });

  const middleWares = [thunk];
  if (__DEV__) {
    middleWares.push(RF());
    const createDebugger = require("redux-flipper").default;
    middleWares.push(createDebugger());
  }

  return createStore(reducers, {}, compose(applyMiddleware(...middleWares)));
}

export const store = configureStore();
