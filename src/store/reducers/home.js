import { types } from '../actions/home';
const initial = {
  values: []
};

export default (state = initial, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_HOME:
      return {
        ...state,
        values: payload
      };
    default:
      return state;
  }
}