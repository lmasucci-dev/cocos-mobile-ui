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
  const [feedbackModalVisible, setFeedbackModalVisible] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleOrdersFeedback = ({id, status}: {id: string; status: string}) => {
    if (status === 'REJECTED') {
      setMessage(`ID: ${id} - La orden no cumple con los requerimientos.`);
    }

    if (status === 'PENDING') {
      setMessage('La orden fue enviada al mercado.');
    }

    if (status === 'FILLED') {
      setMessage('La orden fue ejecutada.');
    }
    setModalVisible(false);
    setFeedbackModalVisible(true);
  };

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
      handleOrdersFeedback(res?.data);
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
    feedbackModalVisible,
    setFeedbackModalVisible,
    message,
  };
}

export default useOrders;
