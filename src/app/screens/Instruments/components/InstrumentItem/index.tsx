import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {calculatePercentage} from '@utils/numberUtils';
import Avatar from '@components/Avatar';
import {Instrument} from '@interfaces/instrumentsInterface';

import styles from './styles';

const InstrumentItem = ({
  item,
  onInstrumentPress,
}: {
  item: Instrument;
  onInstrumentPress: (name: string, id: number) => void;
}) => {
  const percentage = parseFloat(
    calculatePercentage(item.close_price, item.last_price),
  );
  const color = percentage >= 0 ? 'green' : 'red';
  const sign = color === 'green' ? '+' : '';
  return (
    <TouchableOpacity
      onPress={() => onInstrumentPress(item.name, item.id)}
      style={styles.row}>
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
    </TouchableOpacity>
  );
};

export default InstrumentItem;
