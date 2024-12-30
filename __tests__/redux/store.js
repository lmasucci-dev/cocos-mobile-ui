import configureStore from 'redux-mock-store';

const initialState = {
  instruments: {},
  portfolio: {},
};

const mockStore = configureStore([]);
const store = mockStore(initialState);

export {store, initialState};

// Test dummy to avoid Jest error
test('dummy test', () => {
  expect(true).toBe(true);
});
