import React from 'react';
import {Text, View} from 'react-native';
import usePortfolio from '@app/screens/Portfolio/hooks/usePortfolio';
import FullScreenLoader from '@app/components/FullScreenLoader';
import useOrders from '@app/hooks/useOrders';

import OrderModal from '../Instruments/components/OrderModal';
import AssetsList from './components/AssetsList';
import styles from './styles';

function PortfolioScreen() {
  const {assets, loading} = usePortfolio();
  const {
    handleOpenModal,
    handleCloseModal,
    selectedInstrument,
    modalVisible,
    handleSubmit,
  } = useOrders();
  return (
    <View style={styles.backgroundColor}>
      <Text style={styles.subtitle}>Portfolio</Text>
      {loading ? (
        <FullScreenLoader />
      ) : (
        <AssetsList
          assets={assets}
          onAssetPress={(name, id) => handleOpenModal(name, id)}
        />
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

export default PortfolioScreen;
