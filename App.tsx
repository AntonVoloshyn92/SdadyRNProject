import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import BottomNavigation from './src/navigation/BottomNavigation';
import './src/constants/translations/i18n';
import {Provider} from 'react-redux';
import {store} from './src/store';
import remoteConfig from '@react-native-firebase/remote-config';

const App = () => {
  remoteConfig()
    .fetch()
    .then(() => {
      return remoteConfig().activate();
    });

  const isWhite: boolean = remoteConfig().getBoolean('isWhiteThema');
  console.log(isWhite);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
