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
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  button: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  buttonSelected: {
    backgroundColor: '#007bff',
    borderColor: '#0056b3',
  },
  buttonText: {
    color: '#000',
  },
  buttonTextSelected: {
    color: '#fff',
  },
  responseContainer: {
    marginTop: 20,
  },
  responseText: {
    fontSize: 16,
    marginBottom: 5,
  },
  closeButton: {
    backgroundColor: 'blue',
    borderRadius: 4,
  },
});
