import React from 'react';
import {Text, View} from 'react-native';
import usePortfolio from '@app/screens/Portfolio/hooks/usePortfolio';
import FullScreenLoader from '@app/components/FullScreenLoader';

import AssetsList from './components/AssetsList';
import styles from './styles';

function PortfolioScreen() {
  const {assets, loading} = usePortfolio();
  return (
    <View style={styles.backgroundColor}>
      {loading ? (
        <FullScreenLoader />
      ) : (
        <>
          <Text style={styles.subtitle}>Portfolio</Text>
          <AssetsList assets={assets} />
        </>
      )}
    </View>
  );
}

export default PortfolioScreen;
