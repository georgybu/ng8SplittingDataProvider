import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SimpleStore} from '../data-provider/simple.store';
import {EMPTY, Observable} from 'rxjs';
import {httpSimpleStoreEffect} from '../data-provider/httpEffect';
import {IAsyncResult} from '../data-provider/IAsyncResult.interface';
import {IDataProvider} from '../data-provider/data-provider.interface';

interface IStore {
  users: IAsyncResult<any>;
}

@Injectable({
  providedIn: 'root'
})
export class UsersApiService implements IDataProvider {
  private store = new SimpleStore<IStore>({
    users: {loading: false, data: null, error: null}
  });

  constructor(private http: HttpClient) {
  }

  clearStore(key: string): void {
    switch (key) {
      case 'users':
        return this.store.setState({users: null});
        break;
    }
  }

  getFromStore(key: string): Observable<any> {
    switch (key) {
      case 'users':
        return this.store.select('users');
      default:
        return EMPTY;
    }
  }

  sendRequest({key, data, useETag}): void {
    switch (key) {
      case 'users':
        const url = 'https://jsonplaceholder.typicode.com/users';
        this.store.setState({users: {loading: true, data: null, error: null}});
        this.http.get(url).pipe(httpSimpleStoreEffect(this.store, 'users')).subscribe();
        break;
    }
  }
}
