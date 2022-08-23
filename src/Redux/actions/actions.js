import axios from 'axios';
import { BASE_URL } from '../constants/index';

export const GET_USERS = 'GET_USERS';

export const getUsers = () => {
  try {
    return async (dispatch) => {
      const res = await axios.get(`${BASE_URL}users`);
      if (res.data) {
        dispatch({
          type: GET_USERS,
          payload: res.data,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
  }
};
