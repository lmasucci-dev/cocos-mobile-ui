import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import InstrumentItem from '../../Instruments/components/InstrumentItem';
import {Instrument} from '@interfaces/instrumentsInterface';

const mockInstrument: Instrument = {
  id: 1,
  name: 'Instrument 1',
  ticker: 'ticker',
  type: 'string',
  last_price: 1,
  close_price: 2,
};

describe('InstrumentItem', () => {
  it('should render the instrument name', () => {
    const {getByText} = render(
      <InstrumentItem item={mockInstrument} onInstrumentPress={jest.fn()} />,
    );

    expect(getByText('Instrument 1')).toBeTruthy();
  });

  it('should call onInstrumentPress with correct arguments when pressed', () => {
    const mockOnPress = jest.fn();
    const {getByText} = render(
      <InstrumentItem item={mockInstrument} onInstrumentPress={mockOnPress} />,
    );

    fireEvent.press(getByText('Instrument 1'));

    expect(mockOnPress).toHaveBeenCalledWith('Instrument 1', 1);
  });
});
