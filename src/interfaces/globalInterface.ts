import {Instrument} from './instrumentsInterface';
import {Asset} from './portfolioInterface';

export interface State {
  instruments: {
    instruments: Instrument[];
  };
  portfolio: {
    portfolio: Asset[];
  };
}
