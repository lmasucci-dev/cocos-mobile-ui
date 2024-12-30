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
      onRequestClose={() => setVisible(false)}
      accessible={false}>
      <View style={styles.modalContainer} accessible={false}>
        <View style={styles.content} accessible={false}>
          <Text style={styles.title} testID="txtFeedbackTitle">
            {message}
          </Text>
          <View style={styles.closeButton}>
            <Button
              title="OK"
              color="white"
              testID="btnActionFeedback"
              onPress={() => setVisible(false)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default FeedbackModal;
