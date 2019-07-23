import {Inject, Injectable} from '@angular/core';
import {DataProviderConfig} from './data-provider.token';
import {IDataProvider} from './data-provider.interface';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataProviderService implements IDataProvider {

  constructor(@Inject(DataProviderConfig) private config, private http: HttpClient) {
    console.log('DataProviderService', this.config);

    this.config.forEach(c => {
      if (c.api) {
        const service = new c.api(http);
        console.log(service);
        service.getUsers().subscribe();
      }
    });
  }

  clearStore(key: string): void {
  }

  getFromStore<T>(key: string): Observable<T> {
    return undefined;
  }

  sendRequest(o: { key: string; data: any; useETag: boolean }): void {
  }

  // sendRequest(key: string, data: any, useETag: boolean): void {
  //   console.log(this.config);
  // }

  // fetch() {
  //   console.log(this.config);
  //   // return this.http.get(this.config.url);
  // }

}
