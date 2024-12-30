import React from 'react';
import {render} from '@testing-library/react-native';
import Avatar from '../Avatar';

describe('Avatar Component', () => {
  it('should render the ticker text correctly', () => {
    const {getByTestId} = render(<Avatar ticker="AAPL" />);
    const tickerText = getByTestId('txtAvatar');
    expect(tickerText.props.children).toBe('AAPL');
  });
});
