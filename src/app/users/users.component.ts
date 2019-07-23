import {Component, OnInit} from '@angular/core';
import {DataProviderService} from '../data-provider/data-provider.service';
import {MyService} from '../my-service/my-service.service';

@Component({
  selector: 'm-users',
  template: `
    <p>
      users works!
    </p>
  `,
  styles: []
})
export class UsersComponent implements OnInit {

  constructor(private dataProvider: DataProviderService, myService: MyService) {
    console.group('UsersComponent Constructor');
    console.log('myService injectable');
    console.log(JSON.stringify(myService));
    console.groupEnd();
  }

  ngOnInit() {
    console.group('UsersComponent');
    console.log('UsersComponent');
    this.dataProvider.fetch();
    console.groupEnd();
  }

}
