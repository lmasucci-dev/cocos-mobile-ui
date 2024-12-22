import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const Avatar = ({ticker}: {ticker: string}) => {
  return (
    <View style={styles.avatar}>
      <Text style={styles.text}>{ticker}</Text>
    </View>
  );
};

export default Avatar;
