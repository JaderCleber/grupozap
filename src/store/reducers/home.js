import { types } from '../actions/home';
const initial = {};

export default (state = initial, action) => {
  const { type, payload } = action;
  switch (type) {
    case `${types.GET_HOME}_FULFILLED`:
      return {
        ...state,
        data: payload
      };
    default:
      return state;
  }
}