import {Action} from '@ngrx/store';
import {Observable} from 'rxjs';

export enum HttpRequestActionTypes {
  HttpRequest = '[Http] Request',
  HttpApiRequest = '[Http] Api Request',
  HttpRequestSuccess = '[Http] Request Success',
  HttpTransformResponse = '[Http] Transform Response',
  HttpRequestFail = '[Http] Request Fail',
  HttpRequestNotModified = '[Http] Request Not Modified',
  HttpClearResponseData = '[Http] Clear Response Data',
}


export class HttpRequest implements Action {
  readonly type = HttpRequestActionTypes.HttpRequest;

  constructor(public payload: { key: string, method: string, url: string, body?: any }) {
  }
}

export class HttpApiRequest implements Action {
  readonly type = HttpRequestActionTypes.HttpApiRequest;

  constructor(public payload: { key: string, apiRequest: () => Observable<any>, meta?: any }) {
  }
}

export class HttpRequestNotModified implements Action {
  readonly type = HttpRequestActionTypes.HttpRequestNotModified;

  constructor(public payload: { key: string, error: any, meta?: any }) {
  }
}

export class HttpRequestSuccess implements Action {
  readonly type = HttpRequestActionTypes.HttpRequestSuccess;

  constructor(public payload: { key: string, data: any, meta?: any }) {
  }
}

export class HttpTransformResponse implements Action {
  readonly type = HttpRequestActionTypes.HttpTransformResponse;

  constructor(public payload: { key: string, data: any, meta?: any }) {
  }
}

export class HttpRequestFail implements Action {
  readonly type = HttpRequestActionTypes.HttpRequestFail;

  constructor(public payload: { key: string, error: any, meta?: any }) {
  }
}

export class HttpClearResponseData implements Action {
  readonly type = HttpRequestActionTypes.HttpClearResponseData;

  constructor(public payload: any) {
  }
}

export type HttpActions =
  | HttpApiRequest
  | HttpRequest
  | HttpRequestSuccess
  | HttpTransformResponse
  | HttpRequestFail
  | HttpClearResponseData
  | HttpRequestNotModified
  ;
