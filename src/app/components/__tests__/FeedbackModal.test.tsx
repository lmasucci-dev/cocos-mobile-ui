import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import FeedbackModal from '../FeedbackModal';

describe('FeedbackModal', () => {
  const setVisibleMock = jest.fn();

  const props = {
    visible: true,
    setVisible: setVisibleMock,
    message: 'Test Message',
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the modal when visible is true', () => {
    const {getByTestId} = render(<FeedbackModal {...props} />);
    expect(getByTestId('txtFeedbackTitle')).toBeTruthy();
  });

  it('should not render the modal when visible is false', () => {
    const {queryByTestId} = render(
      <FeedbackModal {...props} visible={false} />,
    );
    expect(queryByTestId('txtFeedbackTitle')).toBeNull();
  });

  it('should display the correct message', () => {
    const {getByTestId} = render(<FeedbackModal {...props} />);
    expect(getByTestId('txtFeedbackTitle').props.children).toBe('Test Message');
  });

  it('should call setVisible with false when button is pressed', () => {
    const {getByTestId} = render(<FeedbackModal {...props} />);
    fireEvent.press(getByTestId('btnActionFeedback'));
    expect(setVisibleMock).toHaveBeenCalledWith(false);
  });
});
