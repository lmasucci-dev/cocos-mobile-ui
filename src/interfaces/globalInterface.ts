import {Instrument} from './instrumentsInterface';

export interface State {
  instruments: {
    instruments: Instrument[];
  };
}
