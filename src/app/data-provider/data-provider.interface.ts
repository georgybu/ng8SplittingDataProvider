import {Observable} from 'rxjs';
import {IDataProviderRequest} from './IDataProvider.request';

export interface IDataProvider {
  sendRequest(o: IDataProviderRequest): void;
  getFromStore<T>(key: string): Observable<T>;
  clearStore(key: string): void;
}
