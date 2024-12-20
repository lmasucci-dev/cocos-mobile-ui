import {StyleSheet} from 'react-native';
import {avatarBackground} from '../../../../../constants/colors';

export default StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: avatarBackground,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
