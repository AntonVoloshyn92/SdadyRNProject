import {setThemaIsWhite} from './app.actions';
import {AppThunk, AppThunkDispatcher, SET_IS_WHITE_THEME} from './app.types';
import {AsyncStorage} from 'react-native';

const TRUTH_VALUE = 'true';
const FALSE_VALUE = 'false';

export const setIsWhiteThemaThunk = (
  isWhiteTheme: boolean,
): AppThunk<Promise<void>> => {
  return async (dispatch: AppThunkDispatcher) => {
    try {
      await AsyncStorage.setItem(
        SET_IS_WHITE_THEME,
        isWhiteTheme ? TRUTH_VALUE : FALSE_VALUE,
      );
      dispatch(setThemaIsWhite(isWhiteTheme));
    } catch (error) {
      console.log(error);
    }
  };
};
