import {AppActionTypes, SET_IS_WHITE_THEME} from './app.types';

export function setThemaIsWhite(isWhiteTheme: boolean): AppActionTypes {
  return {type: SET_IS_WHITE_THEME, payload: isWhiteTheme};
}
