import React from 'react';
import {Provider} from 'react-redux';

function App({children, store}) {
  return <Provider store={store}>{children}</Provider>;
}

export default App;
