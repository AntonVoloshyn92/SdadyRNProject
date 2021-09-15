import {setThemaIsWhite} from './app.actions';
import {AppThunk, AppThunkDispatcher} from './app.types';

export function setIsWhiteThemaThunk(
  isWhiteTheme: boolean,
): AppThunk<Promise<void>> {
  return async (dispatch: AppThunkDispatcher) => {
    try {
      dispatch(setThemaIsWhite(isWhiteTheme));
    } catch (error) {
      console.log(error);
    }
  };
}
