import React from 'react';
import {FlatList, View} from 'react-native';
import {Instrument, InstrumentList} from '@interfaces/instrumentsInterface';
import InstrumentItem from '../InstrumentItem';

const InstrumentsList = ({instruments}: InstrumentList) => {
  const renderItem = ({item}: {item: Instrument}) => (
    <InstrumentItem item={item} />
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
