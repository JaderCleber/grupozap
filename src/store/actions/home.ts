import IImmobile from '../../model/IImmobile';
import api from '../../api/home';

export const types = {
  GET_HOME: 'GET_HOME',
  GET_DETAILS: 'GET_DETAILS',
};

const getHome = () => async (dispatch: any) => {
  let data: IImmobile[] = [];
  try {
    const res: IImmobile[] = await api.getHome();
    data = res.filter(item => {
      const { lon, lat } = item.address.geoLocation.location;
      if (lon === 0 && lat === 0) {
        return false;
      }
      return true;
    });

  } catch (error) {
    console.error(error);
  }
  dispatch({
    type: types.GET_HOME,
    payload: data
  });
};

const getDetails = (item: IImmobile) => async (dispatch: any) => {
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