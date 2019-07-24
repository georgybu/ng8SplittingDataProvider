import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IDataProvider} from './data-provider/data-provider.interface';
import {BehaviorSubject, EMPTY, Observable} from 'rxjs';
import {IDataProviderRequest} from './data-provider/IDataProvider.request';
import {httpSubjectEffect} from './data-provider/httpEffect';

@Injectable({
  providedIn: 'root'
})
export class AppApiService implements IDataProvider {
  private albums$ = new BehaviorSubject({loading: false, data: null, error: null});

  constructor(private http: HttpClient) {
  }

  clearStore(key: string): void {
    if (key === 'albums') {
      this.albums$.next(null);
    }
  }

  getFromStore(key: string): Observable<any> {
    if (key === 'albums') {
      return this.albums$;
    }
    return EMPTY;
  }

  sendRequest(o: IDataProviderRequest): void {
    if (o.key === 'albums') {
      const url = 'https://jsonplaceholder.typicode.com/albums';
      this.albums$.next({loading: true, data: null, error: null});
      this.http.get(url).pipe(httpSubjectEffect(this.albums$)).subscribe();
    }
  }
}
