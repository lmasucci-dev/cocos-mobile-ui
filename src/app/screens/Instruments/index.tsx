import React from 'react';
import {Text, View} from 'react-native';
import FullScreenLoader from '@app/components/FullScreenLoader';

import InstrumentsList from './components/InstrumentsList';
import SearchBar from './components/SearchBar';
import useInstruments from './hooks/useInstruments';
import styles from './styles';
import OrderModal from './components/OrderModal';
import useOrders from '@app/hooks/useOrders';

function InstrumentsScreen() {
  const {instruments, loading, searchQuery, setSearchQuery} = useInstruments();
  const {
    handleOpenModal,
    handleCloseModal,
    selectedInstrument,
    modalVisible,
    handleSubmit,
  } = useOrders();
  return (
    <View style={styles.backgroundColor}>
      <SearchBar onSearch={setSearchQuery} initialValue={searchQuery} />
      <Text style={styles.subtitle}>Lista de instrumentos</Text>
      {loading ? (
        <FullScreenLoader />
      ) : (
        <>
          <InstrumentsList
            instruments={instruments}
            onInstrumentPress={(name, id) => handleOpenModal(name, id)}
          />
        </>
      )}
      {selectedInstrument && (
        <OrderModal
          visible={modalVisible}
          onClose={handleCloseModal}
          instrument={selectedInstrument}
          orderType="BUY"
          handleSubmit={handleSubmit}
        />
      )}
    </View>
  );
}

export default InstrumentsScreen;
