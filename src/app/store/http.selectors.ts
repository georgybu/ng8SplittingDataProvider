import * as fromRoot from './index';

// TODO: check if need memoize
// import {createSelector} from '@ngrx/store';
// import * as fromHttp from '../http/http.reducer';
// export const getHttpState = (state: fromRoot.State) => state.data;
// export const getDataByKey = (key: string) => createSelector(getHttpState, (state: fromHttp.State) => state[key]);

export const getDataByKey = (key: string) => (state: fromRoot.State) => state.data && state.data[key];
