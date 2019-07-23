import {Observable} from 'rxjs';

/**
 * This is example of DataProvider interface.
 * Don't relevant for `.forRoot`
 */
export interface IDataProvider {

  /**
   * (async) Request to rest api server
   * -> data ? POST: GET
   */
  sendRequest(key: string, data: any, useETag: boolean): void;

  /**
   * Get data stream from store / service / behavior subject
   */
  getFromStore<T>(key: string): Observable<T>;

  /**
   * Clear store data (ngOnDestroy)
   */
  clearStore(key: string): void;
}
