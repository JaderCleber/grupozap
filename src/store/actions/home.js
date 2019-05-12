import api from '../../api/home';

export const types = {
  GET_HOME: 'GET_HOME',
};

const getHome = () => (dispatch) => dispatch({
  type: types.GET_HOME,
  payload: {
    promise: async () => {
      try {
        return await api.getHome();
      } catch (error) {
        console.error(error);
      }
    }
  }
});

export default { getHome };