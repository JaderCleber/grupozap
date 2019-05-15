import api from '../../api/home';

export const types = {
  GET_HOME: 'GET_HOME',
  GET_DETAILS: 'GET_DETAILS',
};

const getHome = () => async (dispatch) => {
  try {
    const data = await api.getHome();
    dispatch({
      type: types.GET_HOME,
      payload: data || []
    });
  } catch (error) {
    console.error(error);
  }
};

const getDetails = (item) => async (dispatch) => {
  try {
    dispatch({
      type: types.GET_DETAILS,
      payload: item
    });
  } catch (error) {
    console.error(error);
  }
};

export default { getHome, getDetails };