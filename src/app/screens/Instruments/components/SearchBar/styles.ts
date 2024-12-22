import {StyleSheet} from 'react-native';
import {backgroundColor, white} from '@constants/colors';

export default StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: backgroundColor,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  input: {
    height: 40,
    paddingHorizontal: 8,
    backgroundColor: backgroundColor,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: white,
    fontSize: 16,
    color: white,
  },
});
