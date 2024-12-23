import {useState} from 'react';
import {Alert} from 'react-native';
import {OrderPayload} from '@interfaces/ordersInterface';
import {createOrder} from '@services/OrdersService';

function useOrders() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedInstrument, setSelectedInstrument] = useState<string | null>(
    null,
  );
  const [selectedInstrumentID, setSelectedInstrumentID] = useState<
    number | null
  >(null);
  const handleSubmit = async (
    type: 'BUY' | 'SELL',
    kind: 'MARKET' | 'LIMIT',
    quantity: number,
    price: number,
  ) => {
    if (!quantity || (kind === 'LIMIT' && !price)) {
      Alert.alert('Error', 'Please fill all required fields.');
      return;
    }

    const payload = {
      instrument: selectedInstrumentID?.toString() || '',
      type,
      kind,
      quantity: parseFloat(quantity.toString()),
      ...(kind === 'LIMIT' && {price: parseFloat(price.toString())}),
    };

    try {
      const res = await createOrder(payload as OrderPayload);
      if (res?.data) {
        Alert.alert('Success', 'Order submitted successfully.');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to submit order.');
    }
  };

  const handleOpenModal = (name: string, id: number) => {
    setSelectedInstrument(name);
    setSelectedInstrumentID(id);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedInstrument(null);
    setSelectedInstrumentID(null);
  };
  return {
    modalVisible,
    selectedInstrument,
    selectedInstrumentID,
    handleOpenModal,
    handleCloseModal,
    handleSubmit,
  };
}

export default useOrders;
