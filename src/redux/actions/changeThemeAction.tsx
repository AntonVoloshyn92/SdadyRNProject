import {ThemeState} from '../../constants/enums/ThemeState';

export function changeTheme(theme: ThemeState) {
  return {
    themaStyle: theme,
  };
}
