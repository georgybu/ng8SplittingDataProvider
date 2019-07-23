import {Component} from '@angular/core';
import {MyService} from './my-service/my-service.service';

@Component({
  selector: 'm-root',
  template: `
    <m-users></m-users>
    <m-posts></m-posts>
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
export class AppComponent {
  constructor(myService: MyService) {
    console.group('AppComponent Constructor');
    console.log('myService injectable');
    console.log(JSON.stringify(myService));
    console.groupEnd();
  }
}
