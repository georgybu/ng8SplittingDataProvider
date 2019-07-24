import {ActionReducerMap, MetaReducer} from '@ngrx/store';

import * as fromHttp from './http.reducer';

export interface State {
  data: fromHttp.State;
}

export const reducers: ActionReducerMap<State> = {
  data: fromHttp.reducer
};
