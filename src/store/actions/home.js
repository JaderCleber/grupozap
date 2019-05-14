import api from '../../api/home';

export const types = {
  GET_HOME: 'GET_HOME',
};

const getHome = () => async (dispatch) => {
  try {
    const data = await api.getHome();
    dispatch({
      type: types.GET_HOME,
      payload: data
    });
  } catch (error) {
    console.error(error);
  }
};

export default { getHome };