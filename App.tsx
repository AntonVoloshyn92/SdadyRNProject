import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import BottomNavigation from './src/navigation/BottomNavigation';
import './src/constants/translations/i18n';
import {Provider, useDispatch} from 'react-redux';
import {store} from './src/store';
import remoteConfig from '@react-native-firebase/remote-config';
import {setIsWhiteThemaThunk} from './src/store/app/app.thunks';

const App = () => {
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  );
};

const AppWrapper = () => {
  const dispatch = useDispatch();

  remoteConfig()
    .setDefaults({
      isWhiteThema: true,
    })
    .then(() => remoteConfig().fetchAndActivate())
    .then(fetchedRemotely => {
      if (fetchedRemotely) {
        console.log('Configs were retrieved from the backend and activated.');
      } else {
        console.log(
          'No configs were fetched from the backend, and the local configs were already activated',
        );
      }
    });

  const isWhite: boolean = remoteConfig().getBoolean('isWhiteThema');
  console.log(isWhite);

  dispatch(setIsWhiteThemaThunk(isWhite));

  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
};

export default App;
