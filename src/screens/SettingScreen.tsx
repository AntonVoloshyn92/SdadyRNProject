import React from 'react';
import {View, StyleSheet} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import Selector from '../components/LanguageSelector';
import {useTranslation} from 'react-i18next';
import {Text} from 'react-native-elements';

function SettingScreen() {
  const {t} = useTranslation();

  const data = [
    {
      label: t('common:themeLight'),
    },
    {
      label: t('common:themeDark'),
    },
  ];

  return (
    <View>
      <Selector />
      <View style={styles.container}>
        <Text style={styles.textStyle}>{t('common:themeSelector')}</Text>
        <RadioButtonRN data={data} selectedBtn={e => console.log(e)} />
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
  container: {
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  textStyle: {
    color: '#444',
    fontSize: 28,
    fontWeight: '600',
  },
  themaContainer: {
    marginTop: 20,
  },
});

export default SettingScreen;
