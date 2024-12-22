import {StyleSheet} from 'react-native';
import {white} from '@constants/colors';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  cellContainer: {
    flex: 1,
    marginLeft: 12,
  },
  cellTicker: {
    fontSize: 18,
    fontWeight: 'bold',
    color: white,
    marginBottom: 4,
  },
  cellQuantity: {
    fontSize: 14,
    color: white,
    marginBottom: 2,
  },
  cellMarketValue: {
    fontSize: 14,
    color: white,
    marginBottom: 2,
  },
  cellProfit: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  cellPerformance: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  text: {
    color: white,
  },
});
