import {AppState, AppActionTypes, SET_IS_WHITE_THEME} from './app.types';

const initState: AppState = {
  isWhiteTheme: true,
};

export default (state= initState, action: AppActionTypes){
switch(action.type){
    case SET_IS_WHITE_THEME:
        return {...state, isWhiteTheme: action.payload}
        default:
            return state;
}
}
