import {Injectable} from '@angular/core';
import {IDataProvider} from './data-provider.interface';
import {EMPTY, merge, Observable} from 'rxjs';
import {IDataProviderRequest} from './IDataProvider.request';

@Injectable()
export class DataProviderService implements IDataProvider {
  private apiServices: IDataProvider[] = [];

  addApi(api) {
    this.apiServices.push(api);
  }

  clearStore(key: string): void {
    this.apiServices.forEach((api) => api.clearStore ? api.clearStore(key) : null);
  }

  getFromStore<T>(key: string): Observable<T> {
    return merge(...this.apiServices.map(api => api.getFromStore ? api.getFromStore<T>(key) : EMPTY));
  }

  sendRequest(o: IDataProviderRequest): void {
    this.apiServices.forEach((api) => api.sendRequest ? api.sendRequest(o) : null);
  }
}
