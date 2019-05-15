import { types } from '../actions/home';
const initial = {
  values: [],
  item: null
};

export default (state = initial, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_HOME:
      return {
        ...state,
        values: payload
      };
    case types.GET_DETAILS:
      return {
        ...state,
        item: payload
      };
    default:
      return state;
  }
}