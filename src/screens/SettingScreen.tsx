import React from 'react';
import {View, StyleSheet} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import Selector from '../components/LanguageSelector';
import {useTranslation} from 'react-i18next';
import {Text} from 'react-native-elements';
import {isWhiteThemeSelector} from '../store/app/app.selector';
import {useDispatch, connect} from 'react-redux';
import {RootState} from '../store';
import {setIsWhiteThemaThunk} from '../store/app/app.thunks';

const SettingScreen: React.FC<ReturnType<typeof mapStateToProps>> = ({
  isWhiteTheme,
}) => {
  const {t} = useTranslation();

  const dispatch = useDispatch();

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

  return (
    <View style={isWhiteTheme ? styles.main : styles.mainDark}>
      <Selector />
      <View style={styles.container}>
        <Text style={styles.textStyle}>{t('common:themeSelector')}</Text>
        <RadioButtonRN
          data={data}
          selectedBtn={(e: {id: number}) => {
            if (e.id === 1) {
              dispatch(setIsWhiteThemaThunk(true));
            } else {
              dispatch(setIsWhiteThemaThunk(false));
            }
          }}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  isWhiteTheme: isWhiteThemeSelector(state),
});

export default connect(mapStateToProps)(SettingScreen);

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
