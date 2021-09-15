import {RootState} from '..';
import {createSelector} from 'reselect';

const appSelector = (state: RootState) => state.app;

export const isWhiteThemeSelector = createSelector(
  appSelector,
  appState => appState.isWhiteTheme,
);
