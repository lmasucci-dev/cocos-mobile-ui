import React from 'react';
import {Text, View} from 'react-native';
import FullScreenLoader from '@app/components/FullScreenLoader';

import InstrumentsList from './components/InstrumentsList';
import SearchBar from './components/SearchBar';
import useInstruments from './hooks/useInstruments';
import styles from './styles';

function InstrumentsScreen() {
  const {instruments, loading, searchQuery, setSearchQuery} = useInstruments();
  return (
    <View style={styles.backgroundColor}>
      <SearchBar onSearch={setSearchQuery} initialValue={searchQuery} />
      <Text style={styles.subtitle}>Lista de instrumentos</Text>
      {loading ? (
        <FullScreenLoader />
      ) : (
        <>
          <InstrumentsList instruments={instruments} />
        </>
      )}
    </View>
  );
}

export default InstrumentsScreen;
