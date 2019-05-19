import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { combineReducers } from 'redux';

// reducers
import home from '../store/reducers/home';

const rootReducer = combineReducers({
  home,
});

export default (initial: any) => {
  return createStore(
    rootReducer,
    initial,
    compose(
      applyMiddleware(
        thunk,
        logger
      )
    )
  );
}