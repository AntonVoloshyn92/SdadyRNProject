import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import BottomNavigation from './src/navigation/BottomNavigation';
import './src/constants/translations/i18n';
import {Provider} from 'react-redux';
import {store} from './src/store';
import remoteConfig, {firebase} from '@react-native-firebase/remote-config';
import {setIsWhiteThemaThunk} from './src/store/app/app.thunks';

const App = () => {
  remoteConfig()
    .setDefaults({
      isWhiteThema: true,
    })
    .then(() => remoteConfig().fetchAndActivate())
    .then(fetchedRemotely => {
      const isWhite: boolean = remoteConfig().getBoolean('isWhiteThema');
      console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
      console.log(isWhite);
      console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    });

  // dispatch(setIsWhiteThemaThunk(isWhiteThema));

  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
