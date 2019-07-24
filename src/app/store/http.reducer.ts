import {HttpActions, HttpRequestActionTypes} from './http.actions';
import {IAsyncResult} from '../data-provider/IAsyncResult.interface';

export interface State {
  [key: string]: IAsyncResult<any>;
}

export const initialState: State = {};

export function reducer(state = initialState, action: HttpActions): State {
  switch (action.type) {
    case HttpRequestActionTypes.HttpRequest:
    case HttpRequestActionTypes.HttpApiRequest: {
      const key = action.payload.key;
      const data = state[key] ? state[key].data : null;
      const meta = (state[key] && state[key].meta) ? state[key].meta : {};
      return {...state, [key]: {loading: true, data, error: null, meta: {...meta, notModified: false, isRowData: true}}};
    }
    case HttpRequestActionTypes.HttpRequestSuccess: {
      const key = action.payload.key;
      const {data, meta: payloadMeta = {}} = action.payload;
      const currentMeta = (state[key] && state[key].meta) ? state[key].meta : {};
      return {
        ...state, [key]: {
          loading: false, data, error: null, meta: {...currentMeta, ...payloadMeta, notModified: false, isRowData: true}
        }
      };
    }
    case HttpRequestActionTypes.HttpTransformResponse: {
      const {data, meta: payloadMeta = {}} = action.payload;
      const currentMeta = (state[action.payload.key] && state[action.payload.key].meta) ? state[action.payload.key].meta : {};
      return {
        ...state, [action.payload.key]: {
          loading: false, data, error: null, meta: {...currentMeta, ...payloadMeta, notModified: false, isRowData: false}
        }
      };
    }
    case HttpRequestActionTypes.HttpRequestFail:
      return {...state, [action.payload.key]: {loading: false, data: null, error: action.payload.error}};
    case HttpRequestActionTypes.HttpRequestNotModified: {
      const {data, meta} = state[action.payload.key];
      return {...state, [action.payload.key]: {loading: false, data, error: null, meta: {...(meta || {}), notModified: true}}};
    }
    case HttpRequestActionTypes.HttpClearResponseData:
      return {...state, [action.payload]: null};
    default:
      return state;
  }
}
