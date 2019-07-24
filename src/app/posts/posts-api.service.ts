import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IDataProvider} from '../data-provider/data-provider.interface';
import {EMPTY, Observable} from 'rxjs';
import {IAsyncResult} from '../data-provider/IAsyncResult.interface';
import {SimpleStore} from '../data-provider/simple.store';
import {httpStoreEffect} from '../data-provider/httpEffect';

interface IStore {
  posts: IAsyncResult<any>;
}

@Injectable()
export class PostsApiService implements IDataProvider {
  private store = new SimpleStore<IStore>({
    posts: {loading: false, data: null, error: null}
  });

  constructor(private http: HttpClient) {
  }

  clearStore(key: string): void {
    switch (key) {
      case 'posts':
        return this.store.setState({posts: null});
        break;
    }
  }

  getFromStore(key: string): Observable<any> {
    switch (key) {
      case 'posts':
        return this.store.select('posts');
      default:
        return EMPTY;
    }
  }

  sendRequest({key, data, useETag}): void {
    switch (key) {
      case 'posts':
        const url = 'https://jsonplaceholder.typicode.com/posts';
        this.store.setState({posts: {loading: true, data: null, error: null}});
        this.http.get(url).pipe(httpStoreEffect(this.store, 'posts')).subscribe();
        break;
    }
  }
}
