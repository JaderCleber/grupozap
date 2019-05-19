import IHome from '../../model/IHome';

import { types } from '../actions/home';
const initial: IHome = {
  values: [],
  item: null
};

export default (state: IHome = initial, action: any) => {
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