import React from 'react';
import {Modal, View, Text, Button} from 'react-native';
import styles from './styles';

type FeedbackModalProps = Readonly<{
  visible: boolean;
  setVisible: (visible: boolean) => void;
  message: string;
}>;

function FeedbackModal({
  visible,
  setVisible,
  message,
}: Readonly<FeedbackModalProps>) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => setVisible(false)}>
      <View style={styles.modalContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>{message}</Text>

          <View style={styles.closeButton}>
            <Button
              title="OK"
              color="white"
              onPress={() => setVisible(false)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default FeedbackModal;
