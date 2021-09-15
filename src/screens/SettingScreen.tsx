import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import Selector from '../components/LanguageSelector';
import {useTranslation} from 'react-i18next';
import {Text} from 'react-native-elements';
import {ThemeType} from '../constants/enums/ThemeType';
import {setIsWhiteThemaThunk} from '../store/app.thunks';

function SettingScreen() {
  const {t} = useTranslation();
  const [theme, setTheme] = useState<ThemeType>();

  const data = [
    {
      label: t('common:themeLight'),
      id: 1,
    },
    {
      label: t('common:themeDark'),
      id: 2,
    },
  ];

  const setBackColor = () => {
    if (theme === ThemeType.LIGHT) {
      return styles.main;
    } else {
      return styles.mainDark;
    }
  };

  return (
    <View style={setBackColor()}>
      <Selector />
      <View style={styles.container}>
        <Text style={styles.textStyle}>{t('common:themeSelector')}</Text>
        <RadioButtonRN
          data={data}
          selectedBtn={e => {
            if (e.id === 1) {
              setTheme(ThemeType.LIGHT);
              setIsWhiteThemaThunk(true);
              //set Redux action here
            } else {
              setTheme(ThemeType.DARK);
              setIsWhiteThemaThunk(false);
              //set Redux action here
            }
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  mainDark: {
    flex: 1,
    backgroundColor: '#6e798a',
    padding: 20,
  },
  container: {
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  textStyle: {
    color: '#444',
    fontSize: 28,
    fontWeight: '600',
  },
  textStyleDark: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '600',
  },
  themaContainer: {
    marginTop: 20,
  },
});

export default SettingScreen;
