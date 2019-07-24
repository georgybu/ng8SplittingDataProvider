import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of, pipe} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, flatMap, map} from 'rxjs/operators';
import {HttpRequestActionTypes} from './http.actions';
import {HttpClient} from '@angular/common/http';

import * as HttpActions from './http.actions';

@Injectable()
export class HttpEffects {

  @Effect()
  httpRequestEffect$: Observable<any> = this.actions$.pipe(
    ofType(HttpRequestActionTypes.HttpRequest),
    flatMap((action) => {
      const {key, method, url, body} = (action as HttpActions.HttpRequest).payload;
      return this.http[method](url, body ? body : undefined).pipe(this.getRequestResult(key));
    })
  );

  @Effect()
  httpApiRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType(HttpRequestActionTypes.HttpApiRequest),
    flatMap((action) => {
      const {key, apiRequest, meta} = (action as HttpActions.HttpApiRequest).payload;
      return apiRequest().pipe(this.getRequestResult(key, meta));
    })
  );

  constructor(private actions$: Actions, private http: HttpClient) {
  }

  private getRequestResult(key, meta = {}) {
    return pipe(
      map((data: any) => new HttpActions.HttpRequestSuccess({key, meta, data})),
      catchError(error => {
        if (error.status === 304) { // Not Modified
          return of(new HttpActions.HttpRequestNotModified({key, error, meta}));
        } else {
          return of(new HttpActions.HttpRequestFail({key, error, meta}));
        }
      })
    );
  }
}

