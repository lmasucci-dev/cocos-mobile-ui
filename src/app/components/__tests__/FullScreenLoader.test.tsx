import React from 'react';
import {render} from '@testing-library/react-native';
import FullScreenLoader from '../FullScreenLoader';

describe('FullScreenLoader Component', () => {
  it('should render the ActivityIndicator', () => {
    const {getByTestId} = render(<FullScreenLoader />);
    const loader = getByTestId('loading');
    expect(loader).toBeTruthy();
  });

  it('should have the correct size and color', () => {
    const {getByTestId} = render(<FullScreenLoader />);
    const loader = getByTestId('loading');
    expect(loader.props.size).toBe('large');
    expect(loader.props.color).toBe('#0000ff');
  });
});
