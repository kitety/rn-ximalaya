import Navigator from './navigator';
import React from 'react';
import {Provider} from 'react-redux';
import store from '@/config/dva';

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
