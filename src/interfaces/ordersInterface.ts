export type OrderResponse = {
  id: string;
  status: 'PENDING' | 'REJECTED' | 'FILLED';
};

export interface OrderPayload {
  instrument: string;
  kind: 'MARKET' | 'LIMIT';
  type: 'BUY' | 'SELL';
  quantity: number;
  price?: number;
}
