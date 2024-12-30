import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Asset} from '@interfaces/portfolioInterface';

export interface PortfolioState {
  portfolio: Asset[];
}

export const initialState: PortfolioState = {
  portfolio: [],
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setPortfolio: (state, action: PayloadAction<Asset[]>) => {
      state.portfolio = action.payload;
    },
  },
});

export const {setPortfolio} = portfolioSlice.actions;
export default portfolioSlice.reducer;
