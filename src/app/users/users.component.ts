import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DataProviderService} from '../data-provider/data-provider.service';

@Component({
  selector: 'm-users',
  template: `
    <p>
      users:
    </p>
    <ul *ngIf="users$ | async as users">
      <li *ngFor="let user of users.data">
        <pre>{{ user.username }}</pre>
      </li>
    </ul>
  `,
  styles: []
})
export class UsersComponent implements OnInit, OnDestroy {
  public users$: Observable<any>;

  constructor(private dataProvider: DataProviderService) {
    this.users$ = this.dataProvider.getFromStore('users');
  }

  ngOnInit() {
    this.dataProvider.sendRequest({key: 'users'});
  }

  ngOnDestroy(): void {
    this.dataProvider.clearStore('users');
  }
}
