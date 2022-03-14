import Navigator from './navigator';
import React from 'react';
import {Provider} from 'react-redux';
import store from '@/config/dva';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
      <StatusBar backgroundColor="transparent" barStyle="dark-content" transclucent/>
    </Provider>
  );
};

export default App;
