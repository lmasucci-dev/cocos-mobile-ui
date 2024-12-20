import axios from 'axios';
import {apiVercelBaseUrl} from '../constants/apiConfig';

export const getPortfolio = async () => {
  try {
    return await axios.get(`${apiVercelBaseUrl}/portfolio`);
  } catch (error) {
    console.log(error);
  }
};
