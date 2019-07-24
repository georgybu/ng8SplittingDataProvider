import {Injectable} from '@angular/core';
import {IDataProvider} from '../data-provider/data-provider.interface';
import {EMPTY, Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {HttpClient} from '@angular/common/http';

import * as HttpActions from '../store/http.actions';
import * as fromRoot from '../store/index';
import {getDataByKey} from '../store/http.selectors';

@Injectable()
export class PostsApiService implements IDataProvider {

  constructor(private store: Store<fromRoot.State>, private http: HttpClient) {
  }

  clearStore(key: string): void {
    switch (key) {
      case 'posts':
        this.store.dispatch(new HttpActions.HttpClearResponseData('posts'));
        break;
    }
  }

  getFromStore(key: string): Observable<any> {
    switch (key) {
      case 'posts':
        return this.store.pipe(select(getDataByKey('posts')));
      default:
        return EMPTY;
    }
  }

  sendRequest({key, data, useETag}): void {
    switch (key) {
      case 'posts':
        const url = 'https://jsonplaceholder.typicode.com/posts';
        this.store.dispatch(new HttpActions.HttpApiRequest({key: 'posts', apiRequest: () => this.http.get(url)}));
        break;
    }
  }
}
