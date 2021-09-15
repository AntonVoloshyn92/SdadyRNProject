import {AppState, AppActionTypes, SET_IS_WHITE_THEME} from './app.types';

const initState: AppState = {
  isWhiteTheme: true,
};

export default (state = initState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case SET_IS_WHITE_THEME:
      console.log('====================================');
      console.log(state, action.payload);
      console.log('====================================');
      return {...state, isWhiteTheme: action.payload};
    default:
      return state;
  }
};
