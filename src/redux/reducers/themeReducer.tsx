import {ThemeState} from '../../constants/enums/ThemeState';

const initTheme = {
  thema: ThemeState.LIGHT,
};

export const themeReducer = (theme = initTheme, action) => {
  switch (action) {
    case ThemeState.LIGHT:
      return ThemeState.LIGHT;
    case ThemeState.DARK:
      return ThemeState.DARK;
  }
};
