import {StyleSheet} from 'react-native';
import {backgroundColor, white} from '@constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backgroundColor,
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    color: white,
  },
});
