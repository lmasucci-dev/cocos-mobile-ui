import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SearchBar from '../../Instruments/components/SearchBar';

describe('SearchBar', () => {
  const mockOnSearch = jest.fn();

  const defaultProps = {
    onSearch: mockOnSearch,
    initialValue: '',
  };

  it('should render the search bar with initial value', () => {
    const {getByDisplayValue} = render(
      <SearchBar {...defaultProps} initialValue="test" />,
    );

    expect(getByDisplayValue('test')).toBeTruthy();
  });

  it('should call onSearch with correct value when text is changed', () => {
    const {getByPlaceholderText} = render(<SearchBar {...defaultProps} />);

    const input = getByPlaceholderText('Buscar activos...');
    fireEvent.changeText(input, 'new search query');

    expect(mockOnSearch).toHaveBeenCalledWith('new search query');
  });

  it('should update the input value when text is changed', () => {
    const {getByPlaceholderText, getByDisplayValue} = render(
      <SearchBar {...defaultProps} />,
    );

    const input = getByPlaceholderText('Buscar activos...');
    fireEvent.changeText(input, 'updated value');

    expect(getByDisplayValue('updated value')).toBeTruthy();
  });
});
