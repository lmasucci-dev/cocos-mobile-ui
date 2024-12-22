import React from 'react';
import {Text, View} from 'react-native';
import Avatar from '@components/Avatar';
import {Asset} from '@interfaces/portfolioInterface';
import {calculatePercentage} from '@utils/numberUtils';

import styles from './styles';

const AssetItem = ({item}: {item: Asset}) => {
  const totalPerformance = parseFloat(
    calculatePercentage(item.avg_cost_price, item.last_price),
  );

  const profit = (item.last_price - item.avg_cost_price) * item.quantity;

  const color = totalPerformance >= 0 ? 'green' : 'red';
  const sign = color === 'green' ? '+' : '';

  const marketValue = item.last_price * item.quantity;

  return (
    <View style={styles.row}>
      <Avatar ticker={item.ticker} />
      <View style={styles.cellContainer}>
        <Text
          style={[
            styles.cellQuantity,
            styles.text,
          ]}>{`Cantidad: ${item.quantity}`}</Text>
        <Text
          style={[
            styles.cellMarketValue,
            styles.text,
          ]}>{`Valor de mercado: $${marketValue.toFixed(2)}`}</Text>
        <Text
          style={[
            styles.cellProfit,
            styles.text,
            {color},
          ]}>{`Ganancia: $${profit.toFixed(2)}`}</Text>
        <Text style={[styles.cellPerformance, styles.text, {color}]}>
          {`Rendimiento: ${sign}${totalPerformance.toFixed(2)}%`}
        </Text>
      </View>
    </View>
  );
};

export default AssetItem;
