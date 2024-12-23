import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  title: {fontSize: 18, marginBottom: 20},
  closeButton: {
    backgroundColor: 'blue',
    borderRadius: 4,
  },
});
