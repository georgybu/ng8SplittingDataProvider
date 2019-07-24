import {SimpleStore} from './simple.store';
import {pipe, Subject, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

export const httpSimpleStoreEffect = (store: SimpleStore, dataKey = 'unknown', effectFn: (r: any) => any = null) => {
  return pipe(
    map(result => {
      const data = effectFn ? effectFn(result) : result;
      store.setState({[dataKey]: {loading: false, data, error: null}});
      return result;
    }),
    catchError(error => {
      store.setState({[dataKey]: {loading: false, data: null, error}});
      return throwError('Error thrown from catchError');
    })
  );
};

export const httpSubjectEffect = (store: Subject<any>, effectFn: (r: any) => any = null) => {
  return pipe(
    map(result => {
      const data = effectFn ? effectFn(result) : result;
      store.next({loading: false, data, error: null});
      return result;
    }),
    catchError(error => {
      store.next({loading: false, data: null, error});
      return throwError('Error thrown from catchError');
    })
  );
};
