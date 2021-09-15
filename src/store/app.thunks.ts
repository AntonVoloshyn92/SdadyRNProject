import {setThemaIsWhite} from './app.actions';
import {AppThunk, AppThunkDispatcher} from './app.types';

export function setIsWhiteThemaThunk(flag: boolean): AppThunk<Promise<void>> {
  return async (dispatch: AppThunkDispatcher) => {
    try {
      await dispatch(setThemaIsWhite(flag));
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
  };
}
