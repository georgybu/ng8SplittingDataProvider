import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DataProviderService} from './data-provider/data-provider.service';

@Component({
  selector: 'm-root',
  template: `
    <m-users></m-users>
    <m-posts></m-posts>

    <div>
      <p>
        albums:
      </p>
      <ul *ngIf="albums$ | async as albums">
        <li *ngFor="let album of albums.data">
          <pre>{{ album.title }}</pre>
        </li>
      </ul>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      flex: 1;
      flex-direction: row;
    }

    m-users,
    m-posts {
      flex: 1;
    }
  `]
})
export class AppComponent implements OnInit, OnDestroy {
  public albums$: Observable<any>;

  constructor(private dataProvider: DataProviderService) {
    this.albums$ = this.dataProvider.getFromStore('albums');
  }

  ngOnInit() {
    this.dataProvider.sendRequest({key: 'albums'});
  }

  ngOnDestroy(): void {
    this.dataProvider.clearStore('albums');
  }
}
