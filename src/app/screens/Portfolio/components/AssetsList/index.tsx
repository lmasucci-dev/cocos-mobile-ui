import React from 'react';
import {FlatList, View} from 'react-native';
import {AssetList, Asset} from '@interfaces/portfolioInterface';
import AssetItem from '../AssetItem';

const AssetsList = ({assets}: AssetList) => {
  const renderItem = ({item}: {item: Asset}) => <AssetItem item={item} />;
  const keyExtractor = (item: Asset, index: number) =>
    index.toString() + item.ticker.toString();

  return (
    <View>
      <FlatList
        data={assets}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default AssetsList;
