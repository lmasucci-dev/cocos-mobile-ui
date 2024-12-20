import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import InstrumentsList from './components/InstrumentsList';
import useInstruments from './hooks/useInstruments';
import FullScreenLoader from '@app/components/FullScreenLoader';
function InstrumentsScreen() {
  const {instruments, loading} = useInstruments();
  return (
    <View style={styles.backgroundColor}>
      {loading ? (
        <FullScreenLoader />
      ) : (
        <>
          <Text style={styles.subtitle}>Lista de instrumentos</Text>
          <InstrumentsList instruments={instruments} />
        </>
      )}
    </View>
  );
}

export default InstrumentsScreen;
