import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
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
    applyMiddleware(
      thunk,
    )
  );
}