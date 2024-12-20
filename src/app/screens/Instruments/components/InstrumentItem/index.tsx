import React from 'react';
import {Text, View} from 'react-native';
import {calculatePercentage} from '@utils/numberUtils';
import Avatar from '@screens/Instruments/components/Avatar';
import {Instrument} from '@interfaces/instrumentsInterface';

import styles from './styles';

const InstrumentItem = ({item}: {item: Instrument}) => {
  const percentage = parseFloat(
    calculatePercentage(item.close_price, item.last_price),
  );
  const color = percentage >= 0 ? 'green' : 'red';
  const sign = color === 'green' ? '+' : '';
  return (
    <View style={styles.row}>
      <Avatar ticker={item.ticker} />
      <Text style={[styles.cellName, styles.text]}>{item.name}</Text>
      <>
        <Text
          style={[
            styles.cellPercentage,
            styles.text,
            {color},
          ]}>{`${sign}${percentage}%`}</Text>
        <Text
          style={[
            styles.cellPercentage,
            styles.text,
          ]}>{`$ ${item.last_price}`}</Text>
      </>
    </View>
  );
};

export default InstrumentItem;
