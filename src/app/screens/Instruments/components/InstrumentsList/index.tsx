import React from 'react';
import {FlatList, View} from 'react-native';
import {Instrument} from '@interfaces/instrumentsInterface';
import InstrumentItem from '../InstrumentItem';

const InstrumentsList = ({
  instruments,
  onInstrumentPress,
}: {
  instruments: Instrument[];
  onInstrumentPress: (name: string, id: number) => void;
}) => {
  const renderItem = ({item}: {item: Instrument}) => (
    <InstrumentItem
      item={item}
      onInstrumentPress={(name, id) => onInstrumentPress(name, id)}
    />
  );
  const keyExtractor = (item: Instrument) => item.id.toString();

  return (
    <View>
      <FlatList
        data={instruments}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default InstrumentsList;
