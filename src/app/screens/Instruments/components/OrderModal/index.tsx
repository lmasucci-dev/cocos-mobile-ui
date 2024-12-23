import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

type OrderModalProps = Readonly<{
  visible: boolean;
  onClose: () => void;
  instrument: number | string | null;
  orderType: 'BUY' | 'SELL';
  handleSubmit: (
    orderType: 'BUY' | 'SELL',
    orderKind: 'MARKET' | 'LIMIT',
    quantity: number,
    price: number,
  ) => void;
}>;

function OrderModal({
  visible,
  onClose,
  instrument,
  orderType,
  handleSubmit,
}: Readonly<OrderModalProps>) {
  const [orderKind, setOrderKind] = useState<'MARKET' | 'LIMIT'>('MARKET');
  const [quantity, setQuantity] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>Place Order for {instrument}</Text>

          {/* Order Kind Buttons */}
          <View style={styles.buttonGroup}>
            {['MARKET', 'LIMIT'].map(kind => (
              <TouchableOpacity
                key={kind}
                style={[
                  styles.button,
                  orderKind === kind && styles.buttonSelected,
                ]}
                onPress={() => setOrderKind(kind as 'MARKET' | 'LIMIT')}>
                <Text
                  style={[
                    styles.buttonText,
                    orderKind === kind && styles.buttonTextSelected,
                  ]}>
                  {kind}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <>
            <Text>Quantity</Text>
            <TextInput
              style={styles.input}
              placeholder="Quantity"
              keyboardType="numeric"
              value={quantity.toString()}
              onChangeText={text => setQuantity(Number(text))}
            />
          </>

          {orderKind === 'LIMIT' && (
            <>
              <Text>Limit</Text>
              <TextInput
                style={styles.input}
                placeholder="Price"
                keyboardType="numeric"
                value={price.toString()}
                onChangeText={text => setPrice(Number(text))}
              />
            </>
          )}

          <View style={styles.closeButton}>
            <Button
              title={orderType}
              color="white"
              onPress={() =>
                handleSubmit(orderType, orderKind, quantity, price)
              }
            />
          </View>
          <Button title="Cancel" color="black" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}

export default OrderModal;
