import axios from 'axios';
import {apiVercelBaseUrl} from '@constants/apiConfig';
import {OrderPayload} from '@interfaces/ordersInterface';

export const createOrder = async (payload: OrderPayload) => {
  let body;
  if (payload.type === 'BUY') {
    body = {
      instrument_id: payload.instrument,
      side: 'BUY',
      type: payload.kind,
      quantity: payload.quantity,
    };
  } else {
    body = {
      instrument_id: payload.instrument,
      side: 'SELL',
      type: payload.kind,
      quantity: payload.quantity,
      ...(payload.kind === 'LIMIT' && {price: payload.price}),
    };
  }
  try {
    return await axios.post(`${apiVercelBaseUrl}/orders`, body);
  } catch (error) {
    console.log(error);
  }
};
