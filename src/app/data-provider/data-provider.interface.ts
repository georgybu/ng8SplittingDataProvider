import {Observable} from 'rxjs';
import {IDataProviderRequest} from './IDataProvider.request';

export interface IDataProvider {

  /**
   * (async) Request to rest api server
   * -> data ? POST: GET
   */
  sendRequest(o: IDataProviderRequest): void;

  /**
   * Get data stream from store / service / behavior subject
   */
  getFromStore<T>(key: string): Observable<T>;

  /**
   * Clear store data (ngOnDestroy)
   */
  clearStore(key: string): void;
}
