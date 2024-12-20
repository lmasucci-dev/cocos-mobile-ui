import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Instrument} from '../../interfaces/instrumentsInterface';

interface InstrumentsState {
  instruments: Instrument[];
}

const initialState: InstrumentsState = {
  instruments: [],
};

const instrumentsSlice = createSlice({
  name: 'instruments',
  initialState,
  reducers: {
    setInstruments: (state, action: PayloadAction<Instrument[]>) => {
      state.instruments = action.payload;
    },
    addInstrument: (state, action: PayloadAction<Instrument>) => {
      state.instruments.push(action.payload);
    },
  },
});

export const {setInstruments, addInstrument} = instrumentsSlice.actions;
export default instrumentsSlice.reducer;
