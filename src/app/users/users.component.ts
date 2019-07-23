import {Component, OnInit} from '@angular/core';
import {DataProviderService} from '../data-provider/data-provider.service';
import {MyService} from '../my-service/my-service.service';
import {ServiceOneService} from '../service1/service-one.service';

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

  constructor(private dataProvider: DataProviderService, myService: MyService, private s: ServiceOneService) {
    console.group('UsersComponent Constructor');
    console.log('myService injectable');
    console.log(JSON.stringify(myService));
    console.groupEnd();

    console.log('ssssssssssssssssssssss', this.s);
  }

  ngOnInit() {
    console.group('UsersComponent');
    console.log('UsersComponent');
    // this.dataProvider.fetch();
    console.groupEnd();
  }

}
