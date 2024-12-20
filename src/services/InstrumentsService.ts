import axios from 'axios';
import {apiVercelBaseUrl} from '../constants/apiConfig';

const config = {
  headers: {'Content-Type': 'application/json'},
};

export const getAllInstruments = async () => {
  try {
    return await axios.get(`${apiVercelBaseUrl}/instruments`, config);
  } catch (error) {
    console.log(error);
  }
};
