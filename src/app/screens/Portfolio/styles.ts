import {StyleSheet} from 'react-native';
import {backgroundColor, secondaryText} from '@constants/colors';

export default StyleSheet.create({
  backgroundColor: {
    backgroundColor,
    flex: 1,
  },
  subtitle: {
    color: secondaryText,
    paddingTop: 24,
    paddingBottom: 4,
    paddingLeft: 8,
    fontSize: 18,
  },
});
