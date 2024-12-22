import axios from 'axios';
import {apiVercelBaseUrl} from '../constants/apiConfig';

const config = {
  headers: {'Content-Type': 'application/json'},
};

export const getAllInstruments = async (query: string) => {
  let path = 'instruments';
  if (query) {
    path = `search?query=${encodeURIComponent(query)}`;
  }
  try {
    return await axios.get(`${apiVercelBaseUrl}/${path}`, config);
  } catch (error) {
    console.log(error);
  }
};
