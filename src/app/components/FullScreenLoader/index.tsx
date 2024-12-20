// src/components/FullScreenLoader.tsx

import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import styles from './styles';

const FullScreenLoader = ({message = 'Aguarda un momento ...'}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export default FullScreenLoader;
