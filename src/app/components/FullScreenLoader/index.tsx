import React from 'react';
import {ActivityIndicator} from 'react-native';
import styles from './styles';
import {loader} from '@constants/colors';

const FullScreenLoader = () => {
  return (
    <>
      <ActivityIndicator style={styles.container} size="large" color={loader} />
    </>
  );
};

export default FullScreenLoader;
