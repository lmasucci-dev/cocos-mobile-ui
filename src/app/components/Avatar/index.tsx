import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const Avatar = ({ticker}: {ticker: string}) => {
  return (
    <View style={styles.avatar} accessible={false}>
      <Text style={styles.text} testID="txtAvatar">
        {ticker}
      </Text>
    </View>
  );
};

export default Avatar;
