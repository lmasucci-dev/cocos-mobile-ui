import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import OrderModal from '../../Instruments/components/OrderModal';

describe('OrderModal', () => {
  const mockHandleSubmit = jest.fn();
  const mockOnClose = jest.fn();

  const defaultProps = {
    visible: true,
    onClose: mockOnClose,
    instrument: 'Instrument 1',
    orderType: 'BUY' as 'BUY' | 'SELL',
    handleSubmit: mockHandleSubmit,
  };

  it('should render the modal with correct instrument name', () => {
    const {getByText} = render(<OrderModal {...defaultProps} />);

    expect(getByText('Place Order for Instrument 1')).toBeTruthy();
  });

  it('should call handleSubmit with correct arguments when BUY button is pressed', () => {
    const {getByText, getByPlaceholderText} = render(
      <OrderModal {...defaultProps} />,
    );

    fireEvent.changeText(getByPlaceholderText('Quantity'), '10');
    fireEvent.press(getByText('BUY'));

    expect(mockHandleSubmit).toHaveBeenCalledWith('BUY', 'MARKET', 10, 0);
  });

  it('should call handleSubmit with correct arguments when LIMIT order is selected and BUY button is pressed', () => {
    const {getByText, getByPlaceholderText} = render(
      <OrderModal {...defaultProps} />,
    );

    fireEvent.press(getByText('LIMIT'));
    fireEvent.changeText(getByPlaceholderText('Quantity'), '10');
    fireEvent.changeText(getByPlaceholderText('Price'), '100');
    fireEvent.press(getByText('BUY'));

    expect(mockHandleSubmit).toHaveBeenCalledWith('BUY', 'LIMIT', 10, 100);
  });

  it('should call onClose when Cancel button is pressed', () => {
    const {getByText} = render(<OrderModal {...defaultProps} />);

    fireEvent.press(getByText('Cancel'));

    expect(mockOnClose).toHaveBeenCalled();
  });
});
