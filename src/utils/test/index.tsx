import React, {ReactNode} from 'react';
import {render, act} from '@testing-library/react-native';
import instrumentsReducer, {
  InstrumentsState,
  initialState as instrumentsInitialState,
} from '@redux/instruments/instrumentsSlice';
import portfolioReducer, {
  PortfolioState,
  initialState as portfolioInitialState,
} from '@redux/portfolio/portfolioSlice';
import App from './app';

type RootState = {
  instruments: InstrumentsState;
  portfolio: PortfolioState;
};

type TestWrapperProps = {
  children?: ReactNode;
  state?: Partial<RootState>;
};

jest.useFakeTimers(); // Habilitar temporizadores simulados en todos los tests

async function wait(ms = 0): Promise<void> {
  await act(async () => {
    jest.advanceTimersByTime(ms);
  });
}

const AllTheProviders: React.FC<TestWrapperProps> = ({children, state}) => {
  const store = configureStore({
    reducer: {
      instruments: instrumentsReducer,
      portfolio: portfolioReducer,
    },
    preloadedState: {
      instruments: {...instrumentsInitialState, ...(state?.instruments || [])},
      portfolio: {...portfolioInitialState, ...(state?.portfolio || [])},
    },
  });

  return <App store={store}>{children}</App>;
};

interface customRenderOptions extends TestWrapperProps {}

// Custom render function
const customRender = (ui: React.ReactElement, options?: customRenderOptions) =>
  render(ui, {
    wrapper: props => <AllTheProviders {...props} state={options?.state} />,
    ...options,
  });

// Re-export everything
export * from '@testing-library/react-native';
export {customRender as render, wait};
import {configureStore as configureToolkitStore} from '@reduxjs/toolkit';

function configureStore({
  reducer,
  preloadedState,
}: {
  reducer: any;
  preloadedState: any;
}) {
  return configureToolkitStore({
    reducer,
    preloadedState,
  });
}
