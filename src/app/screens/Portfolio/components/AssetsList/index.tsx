import React from 'react';
import {FlatList, View} from 'react-native';
import {Asset} from '@interfaces/portfolioInterface';
import AssetItem from '../AssetItem';

const AssetsList = ({
  assets,
  onAssetPress,
}: {
  assets: Asset[];
  onAssetPress: (name: string, id: number) => void;
}) => {
  const renderItem = ({item}: {item: Asset}) => (
    <AssetItem
      item={item}
      onAssetPress={(name, id) => onAssetPress(name, id)}
    />
  );
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
